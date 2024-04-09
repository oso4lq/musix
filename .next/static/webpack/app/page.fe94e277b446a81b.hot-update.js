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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearActiveFilters: function() { return /* binding */ clearActiveFilters; },\n/* harmony export */   setActiveFilter: function() { return /* binding */ setActiveFilter; },\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setIsSearchFalse: function() { return /* binding */ setIsSearchFalse; },\n/* harmony export */   setIsSearchTrue: function() { return /* binding */ setIsSearchTrue; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setSearchPlayList: function() { return /* binding */ setSearchPlayList; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: [],\n    searchPlaylist: [],\n    isSearch: false,\n    filteredPlaylist: [],\n    activeFilters: {\n        authors: [],\n        release_dates: \"default\",\n        genres: [],\n        searchValue: \"\"\n    }\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // Controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: switchTrack(1),\n        setPrevTrack: switchTrack(-1),\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        },\n        // search bar\n        setSearchPlayList: (state, action)=>{\n            state.searchPlaylist = action.payload;\n        },\n        setIsSearchTrue: (state)=>{\n            console.log(\"true\");\n            state.isSearch = true;\n        },\n        setIsSearchFalse: (state)=>{\n            console.log(\"false\");\n            state.isSearch = false;\n        },\n        // filters\n        setActiveFilter: (state, action)=>{\n            state.activeFilters = {\n                authors: action.payload.authors || state.activeFilters.authors,\n                release_dates: action.payload.release_dates || null,\n                genres: action.payload.genres || state.activeFilters.genres,\n                searchValue: action.payload.searchValue || state.activeFilters.searchValue\n            };\n            console.log(\"active filters:\");\n            console.log(\"authors: \" + state.activeFilters.authors);\n            console.log(\"release_dates: \" + state.activeFilters.release_dates);\n            console.log(\"genres: \" + state.activeFilters.genres);\n            state.filteredPlaylist = state.playList.filter((track)=>{\n                const isAuthors = state.activeFilters.authors.length > 0 ? state.activeFilters.authors.includes(track.author) : true;\n                const isGenres = state.activeFilters.genres.length > 0 ? state.activeFilters.genres.includes(track.genre) : true;\n                return isAuthors && isGenres;\n            });\n        },\n        clearActiveFilters: (state)=>{\n            state.activeFilters = {\n                authors: [],\n                release_dates: \"default\",\n                genres: [],\n                searchValue: \"\"\n            };\n            console.log(\"active filters:\");\n            console.log(\"authors: \" + state.activeFilters.authors);\n            console.log(\"release_dates: \" + state.activeFilters.release_dates);\n            console.log(\"genres: \" + state.activeFilters.genres);\n        }\n    }\n});\nconst { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle, setSearchPlayList, setIsSearchTrue, setIsSearchFalse, setActiveFilter, clearActiveFilters } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUM2RDtBQXNCN0QsTUFBTUMsZUFBZ0M7SUFDbENDLE9BQU87SUFDUEMsVUFBVSxFQUFFO0lBQ1pDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxpQkFBaUIsRUFBRTtJQUVuQkMsZ0JBQWdCLEVBQUU7SUFDbEJDLFVBQVU7SUFFVkMsa0JBQWtCLEVBQUU7SUFFcEJDLGVBQWU7UUFDWEMsU0FBUyxFQUFFO1FBQ1hDLGVBQWU7UUFDZkMsUUFBUSxFQUFFO1FBQ1ZDLGFBQWE7SUFDakI7QUFDSjtBQUVBLE1BQU1DLGNBQWMsQ0FBQ0M7SUFDakIsT0FBTyxDQUFDQztRQUNKLE1BQU1DLGdCQUFnQkQsTUFBTVosU0FBUyxHQUFHWSxNQUFNWCxlQUFlLEdBQUdXLE1BQU1kLFFBQVE7UUFDOUUsSUFBSWdCLFdBQVdELGNBQWNFLFNBQVMsQ0FBQ0MsQ0FBQUE7Z0JBQW9CSjttQkFBWkksS0FBS0MsRUFBRSxPQUFLTCxlQUFBQSxNQUFNZixLQUFLLGNBQVhlLG1DQUFBQSxhQUFhSyxFQUFFO2FBQUlOO1FBRTlFRyxXQUFXLENBQUNBLFdBQVdELGNBQWNLLE1BQU0sSUFBSUwsY0FBY0ssTUFBTTtRQUVuRU4sTUFBTWYsS0FBSyxHQUFHZ0IsYUFBYSxDQUFDQyxTQUFTO1FBQ3JDRixNQUFNYixTQUFTLEdBQUc7SUFDdEI7QUFDSjtBQUVBLE1BQU1vQixjQUFjeEIsNkRBQVdBLENBQUM7SUFDNUJ5QixNQUFNO0lBRU54QjtJQUVBeUIsVUFBVTtRQUNOQyxpQkFBaUIsQ0FBQ1YsT0FBT1c7WUFDckJYLE1BQU1mLEtBQUssR0FBRzBCLE9BQU9DLE9BQU87WUFDNUJaLE1BQU1iLFNBQVMsR0FBRztRQUN0QjtRQUNBMEIsYUFBYSxDQUFDYixPQUFPVztZQUNqQlgsTUFBTWQsUUFBUSxHQUFHeUIsT0FBT0MsT0FBTztRQUNuQztRQUNBLFdBQVc7UUFDWEUsU0FBUyxDQUFDZDtZQUNOQSxNQUFNYixTQUFTLEdBQUc7UUFDdEI7UUFDQTRCLFVBQVUsQ0FBQ2Y7WUFDUEEsTUFBTWIsU0FBUyxHQUFHO1FBQ3RCO1FBQ0E2QixjQUFjbEIsWUFBWTtRQUMxQm1CLGNBQWNuQixZQUFZLENBQUM7UUFDM0IsV0FBVztRQUNYb0IsWUFBWSxDQUFDbEIsT0FBT1c7WUFDaEJYLE1BQU1aLFNBQVMsR0FBR3VCLE9BQU9DLE9BQU87WUFDaEMsSUFBSUQsT0FBT0MsT0FBTyxFQUFFO2dCQUNoQixNQUFNMUIsV0FBVzt1QkFBSWMsTUFBTWQsUUFBUTtpQkFBQztnQkFDcENBLFNBQVNpQyxJQUFJLENBQUMsSUFBTUMsS0FBS0MsTUFBTSxLQUFLO2dCQUNwQ3JCLE1BQU1YLGVBQWUsR0FBR0g7WUFDNUI7UUFDSjtRQUNBLGFBQWE7UUFDYm9DLG1CQUFtQixDQUFDdEIsT0FBT1c7WUFDdkJYLE1BQU1WLGNBQWMsR0FBR3FCLE9BQU9DLE9BQU87UUFDekM7UUFDQVcsaUJBQWlCLENBQUN2QjtZQUNkd0IsUUFBUUMsR0FBRyxDQUFDO1lBQ1p6QixNQUFNVCxRQUFRLEdBQUc7UUFDckI7UUFDQW1DLGtCQUFrQixDQUFDMUI7WUFDZndCLFFBQVFDLEdBQUcsQ0FBQztZQUNaekIsTUFBTVQsUUFBUSxHQUFHO1FBQ3JCO1FBQ0EsVUFBVTtRQUNWb0MsaUJBQWlCLENBQUMzQixPQUFPVztZQUNyQlgsTUFBTVAsYUFBYSxHQUFHO2dCQUNsQkMsU0FBU2lCLE9BQU9DLE9BQU8sQ0FBQ2xCLE9BQU8sSUFBSU0sTUFBTVAsYUFBYSxDQUFDQyxPQUFPO2dCQUM5REMsZUFBZWdCLE9BQU9DLE9BQU8sQ0FBQ2pCLGFBQWEsSUFBSTtnQkFDL0NDLFFBQVFlLE9BQU9DLE9BQU8sQ0FBQ2hCLE1BQU0sSUFBSUksTUFBTVAsYUFBYSxDQUFDRyxNQUFNO2dCQUMzREMsYUFBYWMsT0FBT0MsT0FBTyxDQUFDZixXQUFXLElBQUlHLE1BQU1QLGFBQWEsQ0FBQ0ksV0FBVztZQUM5RTtZQUNBMkIsUUFBUUMsR0FBRyxDQUFDO1lBQ1pELFFBQVFDLEdBQUcsQ0FBQyxjQUFjekIsTUFBTVAsYUFBYSxDQUFDQyxPQUFPO1lBQ3JEOEIsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQnpCLE1BQU1QLGFBQWEsQ0FBQ0UsYUFBYTtZQUNqRTZCLFFBQVFDLEdBQUcsQ0FBQyxhQUFhekIsTUFBTVAsYUFBYSxDQUFDRyxNQUFNO1lBQ25ESSxNQUFNUixnQkFBZ0IsR0FBR1EsTUFBTWQsUUFBUSxDQUFDMEMsTUFBTSxDQUFDLENBQUMzQztnQkFDNUMsTUFBTTRDLFlBQVk3QixNQUFNUCxhQUFhLENBQUNDLE9BQU8sQ0FBQ1ksTUFBTSxHQUFHLElBQUlOLE1BQU1QLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDb0MsUUFBUSxDQUFDN0MsTUFBTThDLE1BQU0sSUFBSTtnQkFDaEgsTUFBTUMsV0FBV2hDLE1BQU1QLGFBQWEsQ0FBQ0csTUFBTSxDQUFDVSxNQUFNLEdBQUcsSUFBSU4sTUFBTVAsYUFBYSxDQUFDRyxNQUFNLENBQUNrQyxRQUFRLENBQUM3QyxNQUFNZ0QsS0FBSyxJQUFJO2dCQUM1RyxPQUFPSixhQUFhRztZQUN4QjtRQUNKO1FBQ0FFLG9CQUFvQixDQUFDbEM7WUFDakJBLE1BQU1QLGFBQWEsR0FBRztnQkFDbEJDLFNBQVMsRUFBRTtnQkFDWEMsZUFBZTtnQkFDZkMsUUFBUSxFQUFFO2dCQUNWQyxhQUFhO1lBQ2pCO1lBQ0EyQixRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDLGNBQWN6QixNQUFNUCxhQUFhLENBQUNDLE9BQU87WUFDckQ4QixRQUFRQyxHQUFHLENBQUMsb0JBQW9CekIsTUFBTVAsYUFBYSxDQUFDRSxhQUFhO1lBQ2pFNkIsUUFBUUMsR0FBRyxDQUFDLGFBQWF6QixNQUFNUCxhQUFhLENBQUNHLE1BQU07UUFDdkQ7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUNUYyxlQUFlLEVBQUVHLFdBQVcsRUFDNUJDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUN6REksaUJBQWlCLEVBQUVDLGVBQWUsRUFBRUcsZ0JBQWdCLEVBQ3BEQyxlQUFlLEVBQUVPLGtCQUFrQixFQUFFLEdBQUczQixZQUFZNEIsT0FBTyxDQUFDO0FBQ3pELE1BQU1DLGdCQUFnQjdCLFlBQVk4QixPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlLnRzPzE2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIlxyXG5pbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuXHJcbnR5cGUgVHJhY2tzU3RhdGVUeXBlID0ge1xyXG4gICAgdHJhY2s6IG51bGwgfCB0cmFja1R5cGUsXHJcbiAgICBwbGF5TGlzdDogdHJhY2tUeXBlW11cclxuICAgIGlzUGxheWluZzogYm9vbGVhbixcclxuICAgIGlzU2h1ZmZsZTogYm9vbGVhbixcclxuICAgIHNodWZmbGVQbGF5TGlzdDogdHJhY2tUeXBlW10sXHJcblxyXG4gICAgc2VhcmNoUGxheWxpc3Q6IHRyYWNrVHlwZVtdLFxyXG4gICAgaXNTZWFyY2g6IGJvb2xlYW4sXHJcblxyXG4gICAgZmlsdGVyZWRQbGF5bGlzdDogdHJhY2tUeXBlW10sXHJcblxyXG4gICAgYWN0aXZlRmlsdGVyczoge1xyXG4gICAgICAgIGF1dGhvcnM6IEFycmF5PHN0cmluZz4sXHJcbiAgICAgICAgcmVsZWFzZV9kYXRlczogbnVsbCB8IHN0cmluZyxcclxuICAgICAgICBnZW5yZXM6IEFycmF5PHN0cmluZz4sXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6IHN0cmluZ1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBUcmFja3NTdGF0ZVR5cGUgPSB7XHJcbiAgICB0cmFjazogbnVsbCxcclxuICAgIHBsYXlMaXN0OiBbXSxcclxuICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICBpc1NodWZmbGU6IGZhbHNlLFxyXG4gICAgc2h1ZmZsZVBsYXlMaXN0OiBbXSxcclxuXHJcbiAgICBzZWFyY2hQbGF5bGlzdDogW10sXHJcbiAgICBpc1NlYXJjaDogZmFsc2UsXHJcblxyXG4gICAgZmlsdGVyZWRQbGF5bGlzdDogW10sXHJcblxyXG4gICAgYWN0aXZlRmlsdGVyczoge1xyXG4gICAgICAgIGF1dGhvcnM6IFtdLFxyXG4gICAgICAgIHJlbGVhc2VfZGF0ZXM6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgIGdlbnJlczogW10sXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6IFwiXCJcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHN3aXRjaFRyYWNrID0gKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKHN0YXRlOiBUcmFja3NTdGF0ZVR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VHJhY2tzID0gc3RhdGUuaXNTaHVmZmxlID8gc3RhdGUuc2h1ZmZsZVBsYXlMaXN0IDogc3RhdGUucGxheUxpc3Q7XHJcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gY3VycmVudFRyYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBzdGF0ZS50cmFjaz8uaWQpICsgZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBuZXdJbmRleCA9IChuZXdJbmRleCArIGN1cnJlbnRUcmFja3MubGVuZ3RoKSAlIGN1cnJlbnRUcmFja3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBzdGF0ZS50cmFjayA9IGN1cnJlbnRUcmFja3NbbmV3SW5kZXhdO1xyXG4gICAgICAgIHN0YXRlLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCB0cmFja3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd0cmFja3MnLFxyXG5cclxuICAgIGluaXRpYWxTdGF0ZSxcclxuXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldEN1cnJlbnRUcmFjazogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudHJhY2sgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFBsYXlMaXN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wbGF5TGlzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gQ29udHJvbHNcclxuICAgICAgICBzZXRQbGF5OiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGF1c2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TmV4dFRyYWNrOiBzd2l0Y2hUcmFjaygxKSxcclxuICAgICAgICBzZXRQcmV2VHJhY2s6IHN3aXRjaFRyYWNrKC0xKSxcclxuICAgICAgICAvLyBmZWF0dXJlc1xyXG4gICAgICAgIHNldFNodWZmbGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2h1ZmZsZSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheUxpc3QgPSBbLi4uc3RhdGUucGxheUxpc3RdXHJcbiAgICAgICAgICAgICAgICBwbGF5TGlzdC5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2h1ZmZsZVBsYXlMaXN0ID0gcGxheUxpc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gc2VhcmNoIGJhclxyXG4gICAgICAgIHNldFNlYXJjaFBsYXlMaXN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hQbGF5bGlzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SXNTZWFyY2hUcnVlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RydWUnKTtcclxuICAgICAgICAgICAgc3RhdGUuaXNTZWFyY2ggPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SXNTZWFyY2hGYWxzZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWxzZScpO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZmlsdGVyc1xyXG4gICAgICAgIHNldEFjdGl2ZUZpbHRlcjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBhdXRob3JzPzogc3RyaW5nW10sIHJlbGVhc2VfZGF0ZXM/OiBzdHJpbmcsIGdlbnJlcz86IHN0cmluZ1tdLCBzZWFyY2hWYWx1ZT86IHN0cmluZyB9PikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVGaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogYWN0aW9uLnBheWxvYWQuYXV0aG9ycyB8fCBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMsXHJcbiAgICAgICAgICAgICAgICByZWxlYXNlX2RhdGVzOiBhY3Rpb24ucGF5bG9hZC5yZWxlYXNlX2RhdGVzIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBnZW5yZXM6IGFjdGlvbi5wYXlsb2FkLmdlbnJlcyB8fCBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmdlbnJlcyxcclxuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBhY3Rpb24ucGF5bG9hZC5zZWFyY2hWYWx1ZSB8fCBzdGF0ZS5hY3RpdmVGaWx0ZXJzLnNlYXJjaFZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlIGZpbHRlcnM6Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdXRob3JzOiAnICsgc3RhdGUuYWN0aXZlRmlsdGVycy5hdXRob3JzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbGVhc2VfZGF0ZXM6ICcgKyBzdGF0ZS5hY3RpdmVGaWx0ZXJzLnJlbGVhc2VfZGF0ZXMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2VucmVzOiAnICsgc3RhdGUuYWN0aXZlRmlsdGVycy5nZW5yZXMpO1xyXG4gICAgICAgICAgICBzdGF0ZS5maWx0ZXJlZFBsYXlsaXN0ID0gc3RhdGUucGxheUxpc3QuZmlsdGVyKCh0cmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBdXRob3JzID0gc3RhdGUuYWN0aXZlRmlsdGVycy5hdXRob3JzLmxlbmd0aCA+IDAgPyBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMuaW5jbHVkZXModHJhY2suYXV0aG9yKSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0dlbnJlcyA9IHN0YXRlLmFjdGl2ZUZpbHRlcnMuZ2VucmVzLmxlbmd0aCA+IDAgPyBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmdlbnJlcy5pbmNsdWRlcyh0cmFjay5nZW5yZSkgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQXV0aG9ycyAmJiBpc0dlbnJlc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJBY3RpdmVGaWx0ZXJzOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuYWN0aXZlRmlsdGVycyA9IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcmVsZWFzZV9kYXRlczogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICBnZW5yZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgZmlsdGVyczonKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dGhvcnM6ICcgKyBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVsZWFzZV9kYXRlczogJyArIHN0YXRlLmFjdGl2ZUZpbHRlcnMucmVsZWFzZV9kYXRlcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZW5yZXM6ICcgKyBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmdlbnJlcyk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IFxyXG4gICAgc2V0Q3VycmVudFRyYWNrLCBzZXRQbGF5TGlzdCxcclxuICAgIHNldFBsYXksIHNldFBhdXNlLCBzZXROZXh0VHJhY2ssIHNldFByZXZUcmFjaywgc2V0U2h1ZmZsZSxcclxuICAgIHNldFNlYXJjaFBsYXlMaXN0LCBzZXRJc1NlYXJjaFRydWUsIHNldElzU2VhcmNoRmFsc2UsXHJcbiAgICBzZXRBY3RpdmVGaWx0ZXIsIGNsZWFyQWN0aXZlRmlsdGVycyB9ID0gdHJhY2tzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IHRyYWNrc1JlZHVjZXIgPSB0cmFja3NTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ0cmFjayIsInBsYXlMaXN0IiwiaXNQbGF5aW5nIiwiaXNTaHVmZmxlIiwic2h1ZmZsZVBsYXlMaXN0Iiwic2VhcmNoUGxheWxpc3QiLCJpc1NlYXJjaCIsImZpbHRlcmVkUGxheWxpc3QiLCJhY3RpdmVGaWx0ZXJzIiwiYXV0aG9ycyIsInJlbGVhc2VfZGF0ZXMiLCJnZW5yZXMiLCJzZWFyY2hWYWx1ZSIsInN3aXRjaFRyYWNrIiwiZGlyZWN0aW9uIiwic3RhdGUiLCJjdXJyZW50VHJhY2tzIiwibmV3SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJsZW5ndGgiLCJ0cmFja3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEN1cnJlbnRUcmFjayIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRQbGF5TGlzdCIsInNldFBsYXkiLCJzZXRQYXVzZSIsInNldE5leHRUcmFjayIsInNldFByZXZUcmFjayIsInNldFNodWZmbGUiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNldFNlYXJjaFBsYXlMaXN0Iiwic2V0SXNTZWFyY2hUcnVlIiwiY29uc29sZSIsImxvZyIsInNldElzU2VhcmNoRmFsc2UiLCJzZXRBY3RpdmVGaWx0ZXIiLCJmaWx0ZXIiLCJpc0F1dGhvcnMiLCJpbmNsdWRlcyIsImF1dGhvciIsImlzR2VucmVzIiwiZ2VucmUiLCJjbGVhckFjdGl2ZUZpbHRlcnMiLCJhY3Rpb25zIiwidHJhY2tzUmVkdWNlciIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});