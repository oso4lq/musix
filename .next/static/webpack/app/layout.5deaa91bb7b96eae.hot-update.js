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

/***/ "(app-pages-browser)/./src/store/features/authSlice.ts":
/*!*****************************************!*\
  !*** ./src/store/features/authSlice.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authReducer: function() { return /* binding */ authReducer; },\n/* harmony export */   logOut: function() { return /* binding */ logOut; },\n/* harmony export */   setAuthState: function() { return /* binding */ setAuthState; },\n/* harmony export */   setAuthUserData: function() { return /* binding */ setAuthUserData; },\n/* harmony export */   setAuthUserToken: function() { return /* binding */ setAuthUserToken; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n// Get the user data and token from localStorage if it exists, otherwise use default values\nconst userDataFromLocalStorage = JSON.parse(localStorage.getItem(\"userData\") || \"null\");\nconst userTokenFromLocalStorage = JSON.parse(localStorage.getItem(\"userToken\") || \"null\");\nconst initialState = {\n    authState: userDataFromLocalStorage !== null,\n    authUserData: userDataFromLocalStorage || {\n        id: null,\n        username: \"\",\n        first_name: \"\",\n        last_name: \"\",\n        email: \"\"\n    },\n    authUserToken: userTokenFromLocalStorage || undefined\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        //  Set the authState to true and save the user data to localStorage\n        setAuthState: (state)=>{\n            state.authState = true;\n            localStorage.setItem(\"userData\", JSON.stringify(state.authUserData));\n        },\n        // Log out the user and remove the user data from the state and localStorage\n        logOut: (state)=>{\n            state.authState = false;\n            state.authUserData = {\n                id: null,\n                username: \"\",\n                first_name: \"\",\n                last_name: \"\",\n                email: \"\"\n            };\n            localStorage.removeItem(\"userData\");\n        },\n        // Set the user data to the state and save it to localStorage\n        setAuthUserData: (state, action)=>{\n            state.authUserData = action.payload;\n            localStorage.setItem(\"userData\", JSON.stringify(action.payload));\n        },\n        // Set the token to the state and save it to localStorage\n        setAuthUserToken: (state, action)=>{\n            state.authUserToken = action.payload;\n            console.log(state.authUserToken);\n            localStorage.setItem(\"userToken\", action.payload);\n        }\n    }\n});\nconst { setAuthState, logOut, setAuthUserData, setAuthUserToken } = authSlice.actions;\nconst authReducer = authSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy9hdXRoU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThEO0FBZ0I5RCwyRkFBMkY7QUFDM0YsTUFBTUMsMkJBQTRDQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQyxlQUFlO0FBQ2pHLE1BQU1DLDRCQUEyQ0osS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsZ0JBQWdCO0FBRWpHLE1BQU1FLGVBQThCO0lBQ2xDQyxXQUFXUCw2QkFBNkI7SUFDeENRLGNBQWNSLDRCQUE0QjtRQUN4Q1MsSUFBSTtRQUNKQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFDQUMsZUFBZVQsNkJBQTZCVTtBQUM5QztBQUVBLE1BQU1DLFlBQVlqQiw2REFBV0EsQ0FBQztJQUM1QmtCLE1BQU07SUFDTlg7SUFDQVksVUFBVTtRQUNSLG9FQUFvRTtRQUNwRUMsY0FBYyxDQUFDQztZQUNiQSxNQUFNYixTQUFTLEdBQUc7WUFDbEJKLGFBQWFrQixPQUFPLENBQUMsWUFBWXBCLEtBQUtxQixTQUFTLENBQUNGLE1BQU1aLFlBQVk7UUFDcEU7UUFDQSw0RUFBNEU7UUFDNUVlLFFBQVEsQ0FBQ0g7WUFDUEEsTUFBTWIsU0FBUyxHQUFHO1lBQ2xCYSxNQUFNWixZQUFZLEdBQUc7Z0JBQ25CQyxJQUFJO2dCQUNKQyxVQUFVO2dCQUNWQyxZQUFZO2dCQUNaQyxXQUFXO2dCQUNYQyxPQUFPO1lBQ1Q7WUFDQVYsYUFBYXFCLFVBQVUsQ0FBQztRQUMxQjtRQUNBLDZEQUE2RDtRQUM3REMsaUJBQWlCLENBQUNMLE9BQU9NO1lBQ3ZCTixNQUFNWixZQUFZLEdBQUdrQixPQUFPQyxPQUFPO1lBQ25DeEIsYUFBYWtCLE9BQU8sQ0FBQyxZQUFZcEIsS0FBS3FCLFNBQVMsQ0FBQ0ksT0FBT0MsT0FBTztRQUNoRTtRQUNBLHlEQUF5RDtRQUN6REMsa0JBQWtCLENBQUNSLE9BQU9NO1lBQ3hCTixNQUFNTixhQUFhLEdBQUdZLE9BQU9DLE9BQU87WUFDcENFLFFBQVFDLEdBQUcsQ0FBQ1YsTUFBTU4sYUFBYTtZQUMvQlgsYUFBYWtCLE9BQU8sQ0FBQyxhQUFhSyxPQUFPQyxPQUFPO1FBQ2xEO0lBQ0Y7QUFDRjtBQUdPLE1BQU0sRUFBRVIsWUFBWSxFQUFFSSxNQUFNLEVBQUVFLGVBQWUsRUFBRUcsZ0JBQWdCLEVBQUUsR0FBR1osVUFBVWUsT0FBTyxDQUFDO0FBQ3RGLE1BQU1DLGNBQWNoQixVQUFVaUIsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9mZWF0dXJlcy9hdXRoU2xpY2UudHM/NzFjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG50eXBlIFVzZXJEYXRhID0ge1xyXG4gIGlkOiBudW1iZXIgfCBudWxsLFxyXG4gIHVzZXJuYW1lOiBzdHJpbmcsXHJcbiAgZmlyc3RfbmFtZTogc3RyaW5nLFxyXG4gIGxhc3RfbmFtZTogc3RyaW5nLFxyXG4gIGVtYWlsOiBzdHJpbmcsXHJcbn07XHJcblxyXG50eXBlIEF1dGhTdGF0ZVR5cGUgPSB7XHJcbiAgYXV0aFN0YXRlOiBib29sZWFuLFxyXG4gIGF1dGhVc2VyRGF0YTogVXNlckRhdGE7XHJcbiAgYXV0aFVzZXJUb2tlbj86IHN0cmluZztcclxufTtcclxuXHJcbi8vIEdldCB0aGUgdXNlciBkYXRhIGFuZCB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZSBpZiBpdCBleGlzdHMsIG90aGVyd2lzZSB1c2UgZGVmYXVsdCB2YWx1ZXNcclxuY29uc3QgdXNlckRhdGFGcm9tTG9jYWxTdG9yYWdlOiBVc2VyRGF0YSB8IG51bGwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpIHx8ICdudWxsJyk7XHJcbmNvbnN0IHVzZXJUb2tlbkZyb21Mb2NhbFN0b3JhZ2U6IHN0cmluZyB8IG51bGwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVG9rZW4nKSB8fCAnbnVsbCcpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBBdXRoU3RhdGVUeXBlID0ge1xyXG4gIGF1dGhTdGF0ZTogdXNlckRhdGFGcm9tTG9jYWxTdG9yYWdlICE9PSBudWxsLFxyXG4gIGF1dGhVc2VyRGF0YTogdXNlckRhdGFGcm9tTG9jYWxTdG9yYWdlIHx8IHtcclxuICAgIGlkOiBudWxsLFxyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgfSxcclxuICBhdXRoVXNlclRva2VuOiB1c2VyVG9rZW5Gcm9tTG9jYWxTdG9yYWdlIHx8IHVuZGVmaW5lZCxcclxufTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vICBTZXQgdGhlIGF1dGhTdGF0ZSB0byB0cnVlIGFuZCBzYXZlIHRoZSB1c2VyIGRhdGEgdG8gbG9jYWxTdG9yYWdlXHJcbiAgICBzZXRBdXRoU3RhdGU6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5hdXRoU3RhdGUgPSB0cnVlO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5hdXRoVXNlckRhdGEpKTtcclxuICAgIH0sXHJcbiAgICAvLyBMb2cgb3V0IHRoZSB1c2VyIGFuZCByZW1vdmUgdGhlIHVzZXIgZGF0YSBmcm9tIHRoZSBzdGF0ZSBhbmQgbG9jYWxTdG9yYWdlXHJcbiAgICBsb2dPdXQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5hdXRoU3RhdGUgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuYXV0aFVzZXJEYXRhID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlckRhdGEnKTtcclxuICAgIH0sXHJcbiAgICAvLyBTZXQgdGhlIHVzZXIgZGF0YSB0byB0aGUgc3RhdGUgYW5kIHNhdmUgaXQgdG8gbG9jYWxTdG9yYWdlXHJcbiAgICBzZXRBdXRoVXNlckRhdGE6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFVzZXJEYXRhPikgPT4ge1xyXG4gICAgICBzdGF0ZS5hdXRoVXNlckRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKTtcclxuICAgIH0sXHJcbiAgICAvLyBTZXQgdGhlIHRva2VuIHRvIHRoZSBzdGF0ZSBhbmQgc2F2ZSBpdCB0byBsb2NhbFN0b3JhZ2VcclxuICAgIHNldEF1dGhVc2VyVG9rZW46IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGUuYXV0aFVzZXJUb2tlbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZS5hdXRoVXNlclRva2VuKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJUb2tlbicsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSxcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldEF1dGhTdGF0ZSwgbG9nT3V0LCBzZXRBdXRoVXNlckRhdGEsIHNldEF1dGhVc2VyVG9rZW4gfSA9IGF1dGhTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3QgYXV0aFJlZHVjZXIgPSBhdXRoU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwidXNlckRhdGFGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJUb2tlbkZyb21Mb2NhbFN0b3JhZ2UiLCJpbml0aWFsU3RhdGUiLCJhdXRoU3RhdGUiLCJhdXRoVXNlckRhdGEiLCJpZCIsInVzZXJuYW1lIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiYXV0aFVzZXJUb2tlbiIsInVuZGVmaW5lZCIsImF1dGhTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEF1dGhTdGF0ZSIsInN0YXRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxvZ091dCIsInJlbW92ZUl0ZW0iLCJzZXRBdXRoVXNlckRhdGEiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0QXV0aFVzZXJUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJhY3Rpb25zIiwiYXV0aFJlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/authSlice.ts\n"));

/***/ })

});