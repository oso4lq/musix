"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/myplaylist/page",{

/***/ "(app-pages-browser)/./src/store/features/tracksSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/features/tracksSlice.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearActiveFilters: function() { return /* binding */ clearActiveFilters; },\n/* harmony export */   setActiveFilter: function() { return /* binding */ setActiveFilter; },\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setIsSearchFalse: function() { return /* binding */ setIsSearchFalse; },\n/* harmony export */   setIsSearchTrue: function() { return /* binding */ setIsSearchTrue; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPlaylistNumber: function() { return /* binding */ setPlaylistNumber; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setSearchPlayList: function() { return /* binding */ setSearchPlayList; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: [],\n    searchPlaylist: [],\n    isSearch: false,\n    filteredPlaylist: [],\n    activeFilters: {\n        authors: [],\n        release_dates: \"default\",\n        genres: [],\n        searchValue: \"\"\n    },\n    playlistNumber: null\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        // playlist\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: switchTrack(1),\n        setPrevTrack: switchTrack(-1),\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        },\n        // search bar\n        setSearchPlayList: (state, action)=>{\n            state.searchPlaylist = action.payload;\n        },\n        setIsSearchTrue: (state)=>{\n            console.log(\"true\");\n            state.isSearch = true;\n        },\n        setIsSearchFalse: (state)=>{\n            console.log(\"false\");\n            state.isSearch = false;\n        },\n        // filters\n        setActiveFilter: (state, action)=>{\n            state.activeFilters = {\n                authors: action.payload.authors || state.activeFilters.authors,\n                release_dates: action.payload.release_dates || null,\n                genres: action.payload.genres || state.activeFilters.genres,\n                searchValue: action.payload.searchValue || state.activeFilters.searchValue\n            };\n            state.filteredPlaylist = state.playList.filter((track)=>{\n                const isAuthors = state.activeFilters.authors.length > 0 ? state.activeFilters.authors.includes(track.author) : true;\n                const isGenres = state.activeFilters.genres.length > 0 ? state.activeFilters.genres.includes(track.genre) : true;\n                return isAuthors && isGenres;\n            });\n        },\n        clearActiveFilters: (state)=>{\n            state.activeFilters = {\n                authors: [],\n                release_dates: \"default\",\n                genres: [],\n                searchValue: \"\"\n            };\n        },\n        // set chosen playlist\n        setPlaylistNumber: (state, action)=>{\n            state.playlistNumber = action.payload;\n        // console.log('playlist number ' + state.playlistNumber + \" set\");\n        }\n    }\n});\nconst { // playlist\nsetCurrentTrack, setPlayList, // controls\nsetPlay, setPause, setNextTrack, setPrevTrack, // features\nsetShuffle, // search bat\nsetSearchPlayList, setIsSearchTrue, setIsSearchFalse, // filters\nsetActiveFilter, clearActiveFilters, // set chosen playlist\nsetPlaylistNumber } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkQ7QUF3QjdELE1BQU1DLGVBQWdDO0lBQ2xDQyxPQUFPO0lBQ1BDLFVBQVUsRUFBRTtJQUNaQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsaUJBQWlCLEVBQUU7SUFFbkJDLGdCQUFnQixFQUFFO0lBQ2xCQyxVQUFVO0lBRVZDLGtCQUFrQixFQUFFO0lBRXBCQyxlQUFlO1FBQ1hDLFNBQVMsRUFBRTtRQUNYQyxlQUFlO1FBQ2ZDLFFBQVEsRUFBRTtRQUNWQyxhQUFhO0lBQ2pCO0lBRUFDLGdCQUFnQjtBQUNwQjtBQUVBLE1BQU1DLGNBQWMsQ0FBQ0M7SUFDakIsT0FBTyxDQUFDQztRQUNKLE1BQU1DLGdCQUFnQkQsTUFBTWIsU0FBUyxHQUFHYSxNQUFNWixlQUFlLEdBQUdZLE1BQU1mLFFBQVE7UUFDOUUsSUFBSWlCLFdBQVdELGNBQWNFLFNBQVMsQ0FBQ0MsQ0FBQUE7Z0JBQW9CSjttQkFBWkksS0FBS0MsRUFBRSxPQUFLTCxlQUFBQSxNQUFNaEIsS0FBSyxjQUFYZ0IsbUNBQUFBLGFBQWFLLEVBQUU7YUFBSU47UUFFOUVHLFdBQVcsQ0FBQ0EsV0FBV0QsY0FBY0ssTUFBTSxJQUFJTCxjQUFjSyxNQUFNO1FBRW5FTixNQUFNaEIsS0FBSyxHQUFHaUIsYUFBYSxDQUFDQyxTQUFTO1FBQ3JDRixNQUFNZCxTQUFTLEdBQUc7SUFDdEI7QUFDSjtBQUVBLE1BQU1xQixjQUFjekIsNkRBQVdBLENBQUM7SUFDNUIwQixNQUFNO0lBRU56QjtJQUVBMEIsVUFBVTtRQUNOLFdBQVc7UUFDWEMsaUJBQWlCLENBQUNWLE9BQU9XO1lBQ3JCWCxNQUFNaEIsS0FBSyxHQUFHMkIsT0FBT0MsT0FBTztZQUM1QlosTUFBTWQsU0FBUyxHQUFHO1FBQ3RCO1FBQ0EyQixhQUFhLENBQUNiLE9BQU9XO1lBQ2pCWCxNQUFNZixRQUFR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X0UvLi9zcmMvc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UudHM/MTZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiXHJcbmltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxudHlwZSBUcmFja3NTdGF0ZVR5cGUgPSB7XHJcbiAgICB0cmFjazogbnVsbCB8IHRyYWNrVHlwZSxcclxuICAgIHBsYXlMaXN0OiB0cmFja1R5cGVbXVxyXG4gICAgaXNQbGF5aW5nOiBib29sZWFuLFxyXG4gICAgaXNTaHVmZmxlOiBib29sZWFuLFxyXG4gICAgc2h1ZmZsZVBsYXlMaXN0OiB0cmFja1R5cGVbXSxcclxuXHJcbiAgICBzZWFyY2hQbGF5bGlzdDogdHJhY2tUeXBlW10sXHJcbiAgICBpc1NlYXJjaDogYm9vbGVhbixcclxuXHJcbiAgICBmaWx0ZXJlZFBsYXlsaXN0OiB0cmFja1R5cGVbXSxcclxuXHJcbiAgICBhY3RpdmVGaWx0ZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yczogQXJyYXk8c3RyaW5nPixcclxuICAgICAgICByZWxlYXNlX2RhdGVzOiBudWxsIHwgc3RyaW5nLFxyXG4gICAgICAgIGdlbnJlczogQXJyYXk8c3RyaW5nPixcclxuICAgICAgICBzZWFyY2hWYWx1ZTogc3RyaW5nLFxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5bGlzdE51bWJlcjogbnVtYmVyIHwgbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVHJhY2tzU3RhdGVUeXBlID0ge1xyXG4gICAgdHJhY2s6IG51bGwsXHJcbiAgICBwbGF5TGlzdDogW10sXHJcbiAgICBpc1BsYXlpbmc6IGZhbHNlLFxyXG4gICAgaXNTaHVmZmxlOiBmYWxzZSxcclxuICAgIHNodWZmbGVQbGF5TGlzdDogW10sXHJcblxyXG4gICAgc2VhcmNoUGxheWxpc3Q6IFtdLFxyXG4gICAgaXNTZWFyY2g6IGZhbHNlLFxyXG5cclxuICAgIGZpbHRlcmVkUGxheWxpc3Q6IFtdLFxyXG5cclxuICAgIGFjdGl2ZUZpbHRlcnM6IHtcclxuICAgICAgICBhdXRob3JzOiBbXSxcclxuICAgICAgICByZWxlYXNlX2RhdGVzOiBcImRlZmF1bHRcIixcclxuICAgICAgICBnZW5yZXM6IFtdLFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5bGlzdE51bWJlcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHN3aXRjaFRyYWNrID0gKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKHN0YXRlOiBUcmFja3NTdGF0ZVR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VHJhY2tzID0gc3RhdGUuaXNTaHVmZmxlID8gc3RhdGUuc2h1ZmZsZVBsYXlMaXN0IDogc3RhdGUucGxheUxpc3Q7XHJcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gY3VycmVudFRyYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBzdGF0ZS50cmFjaz8uaWQpICsgZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBuZXdJbmRleCA9IChuZXdJbmRleCArIGN1cnJlbnRUcmFja3MubGVuZ3RoKSAlIGN1cnJlbnRUcmFja3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBzdGF0ZS50cmFjayA9IGN1cnJlbnRUcmFja3NbbmV3SW5kZXhdO1xyXG4gICAgICAgIHN0YXRlLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCB0cmFja3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd0cmFja3MnLFxyXG5cclxuICAgIGluaXRpYWxTdGF0ZSxcclxuXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIC8vIHBsYXlsaXN0XHJcbiAgICAgICAgc2V0Q3VycmVudFRyYWNrOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS50cmFjayA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGxheUxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBsYXlMaXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBjb250cm9sc1xyXG4gICAgICAgIHNldFBsYXk6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQYXVzZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZyA9IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXROZXh0VHJhY2s6IHN3aXRjaFRyYWNrKDEpLFxyXG4gICAgICAgIHNldFByZXZUcmFjazogc3dpdGNoVHJhY2soLTEpLFxyXG4gICAgICAgIC8vIGZlYXR1cmVzXHJcbiAgICAgICAgc2V0U2h1ZmZsZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNTaHVmZmxlID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5TGlzdCA9IFsuLi5zdGF0ZS5wbGF5TGlzdF1cclxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaHVmZmxlUGxheUxpc3QgPSBwbGF5TGlzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBzZWFyY2ggYmFyXHJcbiAgICAgICAgc2V0U2VhcmNoUGxheUxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFBsYXlsaXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJc1NlYXJjaFRydWU6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndHJ1ZScpO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJc1NlYXJjaEZhbHNlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBmaWx0ZXJzXHJcbiAgICAgICAgc2V0QWN0aXZlRmlsdGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGF1dGhvcnM/OiBzdHJpbmdbXSwgcmVsZWFzZV9kYXRlcz86IHN0cmluZywgZ2VucmVzPzogc3RyaW5nW10sIHNlYXJjaFZhbHVlPzogc3RyaW5nIH0+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmFjdGl2ZUZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBhY3Rpb24ucGF5bG9hZC5hdXRob3JzIHx8IHN0YXRlLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycyxcclxuICAgICAgICAgICAgICAgIHJlbGVhc2VfZGF0ZXM6IGFjdGlvbi5wYXlsb2FkLnJlbGVhc2VfZGF0ZXMgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGdlbnJlczogYWN0aW9uLnBheWxvYWQuZ2VucmVzIHx8IHN0YXRlLmFjdGl2ZUZpbHRlcnMuZ2VucmVzLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6IGFjdGlvbi5wYXlsb2FkLnNlYXJjaFZhbHVlIHx8IHN0YXRlLmFjdGl2ZUZpbHRlcnMuc2VhcmNoVmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YXRlLmZpbHRlcmVkUGxheWxpc3QgPSBzdGF0ZS5wbGF5TGlzdC5maWx0ZXIoKHRyYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0F1dGhvcnMgPSBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMubGVuZ3RoID4gMCA/IHN0YXRlLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5pbmNsdWRlcyh0cmFjay5hdXRob3IpIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzR2VucmVzID0gc3RhdGUuYWN0aXZlRmlsdGVycy5nZW5yZXMubGVuZ3RoID4gMCA/IHN0YXRlLmFjdGl2ZUZpbHRlcnMuZ2VucmVzLmluY2x1ZGVzKHRyYWNrLmdlbnJlKSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNBdXRob3JzICYmIGlzR2VucmVzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhckFjdGl2ZUZpbHRlcnM6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVGaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW10sXHJcbiAgICAgICAgICAgICAgICByZWxlYXNlX2RhdGVzOiBcImRlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgIGdlbnJlczogW10sXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzZXQgY2hvc2VuIHBsYXlsaXN0XHJcbiAgICAgICAgc2V0UGxheWxpc3ROdW1iZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBsYXlsaXN0TnVtYmVyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwbGF5bGlzdCBudW1iZXIgJyArIHN0YXRlLnBsYXlsaXN0TnVtYmVyICsgXCIgc2V0XCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgLy8gcGxheWxpc3RcclxuICAgIHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QsXHJcbiAgICAvLyBjb250cm9sc1xyXG4gICAgc2V0UGxheSwgc2V0UGF1c2UsIHNldE5leHRUcmFjaywgc2V0UHJldlRyYWNrLFxyXG4gICAgLy8gZmVhdHVyZXNcclxuICAgIHNldFNodWZmbGUsXHJcbiAgICAvLyBzZWFyY2ggYmF0XHJcbiAgICBzZXRTZWFyY2hQbGF5TGlzdCwgc2V0SXNTZWFyY2hUcnVlLCBzZXRJc1NlYXJjaEZhbHNlLFxyXG4gICAgLy8gZmlsdGVyc1xyXG4gICAgc2V0QWN0aXZlRmlsdGVyLCBjbGVhckFjdGl2ZUZpbHRlcnMsXHJcbiAgICAvLyBzZXQgY2hvc2VuIHBsYXlsaXN0XHJcbiAgICBzZXRQbGF5bGlzdE51bWJlcixcclxufSA9IHRyYWNrc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBjb25zdCB0cmFja3NSZWR1Y2VyID0gdHJhY2tzU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidHJhY2siLCJwbGF5TGlzdCIsImlzUGxheWluZyIsImlzU2h1ZmZsZSIsInNodWZmbGVQbGF5TGlzdCIsInNlYXJjaFBsYXlsaXN0IiwiaXNTZWFyY2giLCJmaWx0ZXJlZFBsYXlsaXN0IiwiYWN0aXZlRmlsdGVycyIsImF1dGhvcnMiLCJyZWxlYXNlX2RhdGVzIiwiZ2VucmVzIiwic2VhcmNoVmFsdWUiLCJwbGF5bGlzdE51bWJlciIsInN3aXRjaFRyYWNrIiwiZGlyZWN0aW9uIiwic3RhdGUiLCJjdXJyZW50VHJhY2tzIiwibmV3SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJsZW5ndGgiLCJ0cmFja3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEN1cnJlbnRUcmFjayIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRQbGF5TGlzdCIsInNldFBsYXkiLCJzZXRQYXVzZSIsInNldE5leHRUcmFjayIsInNldFByZXZUcmFjayIsInNldFNodWZmbGUiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNldFNlYXJjaFBsYXlMaXN0Iiwic2V0SXNTZWFyY2hUcnVlIiwiY29uc29sZSIsImxvZyIsInNldElzU2VhcmNoRmFsc2UiLCJzZXRBY3RpdmVGaWx0ZXIiLCJmaWx0ZXIiLCJpc0F1dGhvcnMiLCJpbmNsdWRlcyIsImF1dGhvciIsImlzR2VucmVzIiwiZ2VucmUiLCJjbGVhckFjdGl2ZUZpbHRlcnMiLCJzZXRQbGF5bGlzdE51bWJlciIsImFjdGlvbnMiLCJ0cmFja3NSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});