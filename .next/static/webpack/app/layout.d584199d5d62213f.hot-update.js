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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearActiveFilters: function() { return /* binding */ clearActiveFilters; },\n/* harmony export */   selectActiveFilters: function() { return /* binding */ selectActiveFilters; },\n/* harmony export */   setActiveFilter: function() { return /* binding */ setActiveFilter; },\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setIsSearchFalse: function() { return /* binding */ setIsSearchFalse; },\n/* harmony export */   setIsSearchTrue: function() { return /* binding */ setIsSearchTrue; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setSearchPlayList: function() { return /* binding */ setSearchPlayList; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: [],\n    searchPlaylist: [],\n    isSearch: false,\n    filteredPlaylist: [],\n    activeFilters: {\n        authors: [],\n        release_dates: \"default\",\n        genres: [],\n        searchValue: \"\"\n    }\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // Controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: switchTrack(1),\n        setPrevTrack: switchTrack(-1),\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        },\n        setSearchPlayList: (state, action)=>{\n            state.searchPlaylist = action.payload;\n        },\n        setIsSearchTrue: (state)=>{\n            console.log(\"true\");\n            state.isSearch = true;\n        },\n        setIsSearchFalse: (state)=>{\n            console.log(\"false\");\n            state.isSearch = false;\n        },\n        setActiveFilter: (state, action)=>{\n            state.activeFilters = {\n                authors: action.payload.authors || state.activeFilters.authors,\n                release_dates: action.payload.release_dates || null,\n                genres: action.payload.genres || state.activeFilters.genres,\n                searchValue: action.payload.searchValue || state.activeFilters.searchValue\n            };\n            state.filteredPlaylist = state.playList.filter((track)=>{\n                var _state_activeFilters_authors;\n                const isAuthors = ((_state_activeFilters_authors = state.activeFilters.authors) === null || _state_activeFilters_authors === void 0 ? void 0 : _state_activeFilters_authors.length) > 0 ? state.activeFilters.authors.includes(track.author) : true;\n                const isGenres = state.activeFilters.genres.length > 0 ? state.activeFilters.genres.includes(track.genre) : true;\n                return isAuthors && isGenres;\n            });\n        // const { filterKey, filterValue } = action.payload;\n        // console.log('filterKey ' + filterKey);\n        // console.log('filterValue ' + filterValue);\n        // state.activeFilters[filterKey] = filterValue;\n        },\n        clearActiveFilters: (state)=>{\n            state.activeFilters = {\n                authors: null,\n                release_dates: \"default\",\n                genres: null\n            };\n        }\n    }\n});\nconst { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle, setSearchPlayList, setIsSearchTrue, setIsSearchFalse, setActiveFilter, clearActiveFilters } = tracksSlice.actions;\nconst selectActiveFilters = (state)=>state.tracks.activeFilters;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkQ7QUF3QjdELE1BQU1DLGVBQWdDO0lBQ2xDQyxPQUFPO0lBQ1BDLFVBQVUsRUFBRTtJQUNaQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsaUJBQWlCLEVBQUU7SUFFbkJDLGdCQUFnQixFQUFFO0lBQ2xCQyxVQUFVO0lBRVZDLGtCQUFrQixFQUFFO0lBRXBCQyxlQUFlO1FBQ1hDLFNBQVMsRUFBRTtRQUNYQyxlQUFlO1FBQ2ZDLFFBQVEsRUFBRTtRQUNWQyxhQUFhO0lBQ2pCO0FBQ0o7QUFFQSxNQUFNQyxjQUFjLENBQUNDO0lBQ2pCLE9BQU8sQ0FBQ0M7UUFDSixNQUFNQyxnQkFBZ0JELE1BQU1aLFNBQVMsR0FBR1ksTUFBTVgsZUFBZSxHQUFHVyxNQUFNZCxRQUFRO1FBQzlFLElBQUlnQixXQUFXRCxjQUFjRSxTQUFTLENBQUNDLENBQUFBO2dCQUFvQko7bUJBQVpJLEtBQUtDLEVBQUUsT0FBS0wsZUFBQUEsTUFBTWYsS0FBSyxjQUFYZSxtQ0FBQUEsYUFBYUssRUFBRTthQUFJTjtRQUU5RUcsV0FBVyxDQUFDQSxXQUFXRCxjQUFjSyxNQUFNLElBQUlMLGNBQWNLLE1BQU07UUFFbkVOLE1BQU1mLEtBQUssR0FBR2dCLGFBQWEsQ0FBQ0MsU0FBUztRQUNyQ0YsTUFBTWIsU0FBUyxHQUFHO0lBQ3RCO0FBQ0o7QUFFQSxNQUFNb0IsY0FBY3hCLDZEQUFXQSxDQUFDO0lBQzVCeUIsTUFBTTtJQUVOeEI7SUFFQXlCLFVBQVU7UUFDTkMsaUJBQWlCLENBQUNWLE9BQU9XO1lBQ3JCWCxNQUFNZixLQUFLLEdBQUcwQixPQUFPQyxPQUFPO1lBQzVCWixNQUFNYixTQUFTLEdBQUc7UUFDdEI7UUFDQTBCLGFBQWEsQ0FBQ2IsT0FBT1c7WUFDakJYLE1BQU1kLFFBQVEsR0FBR3lCLE9BQU9DLE9BQU87UUFDbkM7UUFDQSxXQUFXO1FBQ1hFLFNBQVMsQ0FBQ2Q7WUFDTkEsTUFBTWIsU0FBUyxHQUFHO1FBQ3RCO1FBQ0E0QixVQUFVLENBQUNmO1lBQ1BBLE1BQU1iLFNBQVMsR0FBRztRQUN0QjtRQUNBNkIsY0FBY2xCLFlBQVk7UUFDMUJtQixjQUFjbkIsWUFBWSxDQUFDO1FBQzNCLFdBQVc7UUFDWG9CLFlBQVksQ0FBQ2xCLE9BQU9XO1lBQ2hCWCxNQUFNWixTQUFTLEdBQUd1QixPQUFPQyxPQUFPO1lBQ2hDLElBQUlELE9BQU9DLE9BQU8sRUFBRTtnQkFDaEIsTUFBTTFCLFdBQVc7dUJBQUljLE1BQU1kLFFBQVE7aUJBQUM7Z0JBQ3BDQSxTQUFTaUMsSUFBSSxDQUFDLElBQU1DLEtBQUtDLE1BQU0sS0FBSztnQkFDcENyQixNQUFNWCxlQUFlLEdBQUdIO1lBQzVCO1FBQ0o7UUFFQW9DLG1CQUFtQixDQUFDdEIsT0FBT1c7WUFDdkJYLE1BQU1WLGNBQWMsR0FBR3FCLE9BQU9DLE9BQU87UUFDekM7UUFDQVcsaUJBQWlCLENBQUN2QjtZQUNkd0IsUUFBUUMsR0FBRyxDQUFDO1lBQ1p6QixNQUFNVCxRQUFRLEdBQUc7UUFDckI7UUFDQW1DLGtCQUFrQixDQUFDMUI7WUFDZndCLFFBQVFDLEdBQUcsQ0FBQztZQUNaekIsTUFBTVQsUUFBUSxHQUFHO1FBQ3JCO1FBRUFvQyxpQkFBaUIsQ0FBQzNCLE9BQU9XO1lBQ3JCWCxNQUFNUCxhQUFhLEdBQUc7Z0JBQ2xCQyxTQUFTaUIsT0FBT0MsT0FBTyxDQUFDbEIsT0FBTyxJQUFJTSxNQUFNUCxhQUFhLENBQUNDLE9BQU87Z0JBQzlEQyxlQUFlZ0IsT0FBT0MsT0FBTyxDQUFDakIsYUFBYSxJQUFJO2dCQUMvQ0MsUUFBUWUsT0FBT0MsT0FBTyxDQUFDaEIsTUFBTSxJQUFJSSxNQUFNUCxhQUFhLENBQUNHLE1BQU07Z0JBQzNEQyxhQUFhYyxPQUFPQyxPQUFPLENBQUNmLFdBQVcsSUFBSUcsTUFBTVAsYUFBYSxDQUFDSSxXQUFXO1lBQzlFO1lBQ0FHLE1BQU1SLGdCQUFnQixHQUFHUSxNQUFNZCxRQUFRLENBQUMwQyxNQUFNLENBQUMsQ0FBQzNDO29CQUMxQmU7Z0JBQWxCLE1BQU02QixZQUFZN0IsRUFBQUEsK0JBQUFBLE1BQU1QLGFBQWEsQ0FBQ0MsT0FBTyxjQUEzQk0sbURBQUFBLDZCQUE2Qk0sTUFBTSxJQUFHLElBQUlOLE1BQU1QLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDb0MsUUFBUSxDQUFDN0MsTUFBTThDLE1BQU0sSUFBSTtnQkFDakgsTUFBTUMsV0FBV2hDLE1BQU1QLGFBQWEsQ0FBQ0csTUFBTSxDQUFDVSxNQUFNLEdBQUcsSUFBSU4sTUFBTVAsYUFBYSxDQUFDRyxNQUFNLENBQUNrQyxRQUFRLENBQUM3QyxNQUFNZ0QsS0FBSyxJQUFJO2dCQUM1RyxPQUFPSixhQUFhRztZQUN4QjtRQUNBLHFEQUFxRDtRQUNyRCx5Q0FBeUM7UUFDekMsNkNBQTZDO1FBQzdDLGdEQUFnRDtRQUNwRDtRQUNBRSxvQkFBb0IsQ0FBQ2xDO1lBQ2pCQSxNQUFNUCxhQUFhLEdBQUc7Z0JBQ2xCQyxTQUFTO2dCQUNUQyxlQUFlO2dCQUNmQyxRQUFRO1lBQ1o7UUFDSjtJQUNKO0FBQ0o7QUFFTyxNQUFNLEVBQUVjLGVBQWUsRUFBRUcsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUksaUJBQWlCLEVBQUVDLGVBQWUsRUFBRUcsZ0JBQWdCLEVBQUVDLGVBQWUsRUFBRU8sa0JBQWtCLEVBQUUsR0FBRzNCLFlBQVk0QixPQUFPLENBQUM7QUFDbk4sTUFBTUMsc0JBQXNCLENBQUNwQyxRQUFxQkEsTUFBTXFDLE1BQU0sQ0FBQzVDLGFBQWEsQ0FBQztBQUM3RSxNQUFNNkMsZ0JBQWdCL0IsWUFBWWdDLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UudHM/MTZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiXHJcbmltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbnR5cGUgVHJhY2tzU3RhdGVUeXBlID0ge1xyXG4gICAgdHJhY2s6IG51bGwgfCB0cmFja1R5cGUsXHJcbiAgICBwbGF5TGlzdDogdHJhY2tUeXBlW11cclxuICAgIGlzUGxheWluZzogYm9vbGVhbixcclxuICAgIGlzU2h1ZmZsZTogYm9vbGVhbixcclxuICAgIHNodWZmbGVQbGF5TGlzdDogdHJhY2tUeXBlW10sXHJcblxyXG4gICAgc2VhcmNoUGxheWxpc3Q6IHRyYWNrVHlwZVtdLFxyXG4gICAgaXNTZWFyY2g6IGJvb2xlYW4sXHJcblxyXG4gICAgZmlsdGVyZWRQbGF5bGlzdDogdHJhY2tUeXBlW10sXHJcblxyXG4gICAgLy8gYWN0aXZlRmlsdGVyczogUmVjb3JkPGtleW9mIHRyYWNrVHlwZSwgc3RyaW5nIHwgbnVsbD4gJiB2b2lkXHJcbiAgICBhY3RpdmVGaWx0ZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yczogbnVsbCB8IEFycmF5PHN0cmluZz4sXHJcbiAgICAgICAgcmVsZWFzZV9kYXRlczogbnVsbCB8IHN0cmluZyxcclxuICAgICAgICBnZW5yZXM6IG51bGwgfCBBcnJheTxzdHJpbmc+LFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiBudWxsIHwgc3RyaW5nXHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFRyYWNrc1N0YXRlVHlwZSA9IHtcclxuICAgIHRyYWNrOiBudWxsLFxyXG4gICAgcGxheUxpc3Q6IFtdLFxyXG4gICAgaXNQbGF5aW5nOiBmYWxzZSxcclxuICAgIGlzU2h1ZmZsZTogZmFsc2UsXHJcbiAgICBzaHVmZmxlUGxheUxpc3Q6IFtdLFxyXG5cclxuICAgIHNlYXJjaFBsYXlsaXN0OiBbXSxcclxuICAgIGlzU2VhcmNoOiBmYWxzZSxcclxuXHJcbiAgICBmaWx0ZXJlZFBsYXlsaXN0OiBbXSxcclxuXHJcbiAgICBhY3RpdmVGaWx0ZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yczogW10sXHJcbiAgICAgICAgcmVsZWFzZV9kYXRlczogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgZ2VucmVzOiBbXSxcclxuICAgICAgICBzZWFyY2hWYWx1ZTogXCJcIlxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3dpdGNoVHJhY2sgPSAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiAoc3RhdGU6IFRyYWNrc1N0YXRlVHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFja3MgPSBzdGF0ZS5pc1NodWZmbGUgPyBzdGF0ZS5zaHVmZmxlUGxheUxpc3QgOiBzdGF0ZS5wbGF5TGlzdDtcclxuICAgICAgICBsZXQgbmV3SW5kZXggPSBjdXJyZW50VHJhY2tzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IHN0YXRlLnRyYWNrPy5pZCkgKyBkaXJlY3Rpb247XHJcblxyXG4gICAgICAgIG5ld0luZGV4ID0gKG5ld0luZGV4ICsgY3VycmVudFRyYWNrcy5sZW5ndGgpICUgY3VycmVudFRyYWNrcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHN0YXRlLnRyYWNrID0gY3VycmVudFRyYWNrc1tuZXdJbmRleF07XHJcbiAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHRyYWNrc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3RyYWNrcycsXHJcblxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG5cclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFRyYWNrOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS50cmFjayA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGxheUxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBsYXlMaXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBDb250cm9sc1xyXG4gICAgICAgIHNldFBsYXk6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQYXVzZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZyA9IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXROZXh0VHJhY2s6IHN3aXRjaFRyYWNrKDEpLFxyXG4gICAgICAgIHNldFByZXZUcmFjazogc3dpdGNoVHJhY2soLTEpLFxyXG4gICAgICAgIC8vIGZlYXR1cmVzXHJcbiAgICAgICAgc2V0U2h1ZmZsZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNTaHVmZmxlID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5TGlzdCA9IFsuLi5zdGF0ZS5wbGF5TGlzdF1cclxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaHVmZmxlUGxheUxpc3QgPSBwbGF5TGlzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0U2VhcmNoUGxheUxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFBsYXlsaXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJc1NlYXJjaFRydWU6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndHJ1ZScpO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJc1NlYXJjaEZhbHNlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlRmlsdGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGF1dGhvcnM/OiBzdHJpbmdbXSwgcmVsZWFzZV9kYXRlcz86IHN0cmluZywgZ2VucmVzPzogc3RyaW5nW10sIHNlYXJjaFZhbHVlPzogc3RyaW5nIH0+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmFjdGl2ZUZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBhY3Rpb24ucGF5bG9hZC5hdXRob3JzIHx8IHN0YXRlLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycyxcclxuICAgICAgICAgICAgICAgIHJlbGVhc2VfZGF0ZXM6IGFjdGlvbi5wYXlsb2FkLnJlbGVhc2VfZGF0ZXMgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGdlbnJlczogYWN0aW9uLnBheWxvYWQuZ2VucmVzIHx8IHN0YXRlLmFjdGl2ZUZpbHRlcnMuZ2VucmVzLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6IGFjdGlvbi5wYXlsb2FkLnNlYXJjaFZhbHVlIHx8IHN0YXRlLmFjdGl2ZUZpbHRlcnMuc2VhcmNoVmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YXRlLmZpbHRlcmVkUGxheWxpc3QgPSBzdGF0ZS5wbGF5TGlzdC5maWx0ZXIoKHRyYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0F1dGhvcnMgPSBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmF1dGhvcnM/Lmxlbmd0aCA+IDAgPyBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMuaW5jbHVkZXModHJhY2suYXV0aG9yKSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0dlbnJlcyA9IHN0YXRlLmFjdGl2ZUZpbHRlcnMuZ2VucmVzLmxlbmd0aCA+IDAgPyBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmdlbnJlcy5pbmNsdWRlcyh0cmFjay5nZW5yZSkgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQXV0aG9ycyAmJiBpc0dlbnJlc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBjb25zdCB7IGZpbHRlcktleSwgZmlsdGVyVmFsdWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyS2V5ICcgKyBmaWx0ZXJLZXkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyVmFsdWUgJyArIGZpbHRlclZhbHVlKTtcclxuICAgICAgICAgICAgLy8gc3RhdGUuYWN0aXZlRmlsdGVyc1tmaWx0ZXJLZXldID0gZmlsdGVyVmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhckFjdGl2ZUZpbHRlcnM6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVGaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlbGVhc2VfZGF0ZXM6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgZ2VucmVzOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0LCBzZXRQbGF5LCBzZXRQYXVzZSwgc2V0TmV4dFRyYWNrLCBzZXRQcmV2VHJhY2ssIHNldFNodWZmbGUsIHNldFNlYXJjaFBsYXlMaXN0LCBzZXRJc1NlYXJjaFRydWUsIHNldElzU2VhcmNoRmFsc2UsIHNldEFjdGl2ZUZpbHRlciwgY2xlYXJBY3RpdmVGaWx0ZXJzIH0gPSB0cmFja3NTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0QWN0aXZlRmlsdGVycyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycztcclxuZXhwb3J0IGNvbnN0IHRyYWNrc1JlZHVjZXIgPSB0cmFja3NTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ0cmFjayIsInBsYXlMaXN0IiwiaXNQbGF5aW5nIiwiaXNTaHVmZmxlIiwic2h1ZmZsZVBsYXlMaXN0Iiwic2VhcmNoUGxheWxpc3QiLCJpc1NlYXJjaCIsImZpbHRlcmVkUGxheWxpc3QiLCJhY3RpdmVGaWx0ZXJzIiwiYXV0aG9ycyIsInJlbGVhc2VfZGF0ZXMiLCJnZW5yZXMiLCJzZWFyY2hWYWx1ZSIsInN3aXRjaFRyYWNrIiwiZGlyZWN0aW9uIiwic3RhdGUiLCJjdXJyZW50VHJhY2tzIiwibmV3SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJsZW5ndGgiLCJ0cmFja3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEN1cnJlbnRUcmFjayIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRQbGF5TGlzdCIsInNldFBsYXkiLCJzZXRQYXVzZSIsInNldE5leHRUcmFjayIsInNldFByZXZUcmFjayIsInNldFNodWZmbGUiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNldFNlYXJjaFBsYXlMaXN0Iiwic2V0SXNTZWFyY2hUcnVlIiwiY29uc29sZSIsImxvZyIsInNldElzU2VhcmNoRmFsc2UiLCJzZXRBY3RpdmVGaWx0ZXIiLCJmaWx0ZXIiLCJpc0F1dGhvcnMiLCJpbmNsdWRlcyIsImF1dGhvciIsImlzR2VucmVzIiwiZ2VucmUiLCJjbGVhckFjdGl2ZUZpbHRlcnMiLCJhY3Rpb25zIiwic2VsZWN0QWN0aXZlRmlsdGVycyIsInRyYWNrcyIsInRyYWNrc1JlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});