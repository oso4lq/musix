"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./src/api.tsx":
/*!*********************!*\
  !*** ./src/api.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTrackToPlaylist: function() { return /* binding */ addTrackToPlaylist; },\n/* harmony export */   getLikedTracks: function() { return /* binding */ getLikedTracks; },\n/* harmony export */   getToken: function() { return /* binding */ getToken; },\n/* harmony export */   getTracks: function() { return /* binding */ getTracks; },\n/* harmony export */   login: function() { return /* binding */ login; },\n/* harmony export */   refreshToken: function() { return /* binding */ refreshToken; },\n/* harmony export */   register: function() { return /* binding */ register; },\n/* harmony export */   removeTrackFromPlaylist: function() { return /* binding */ removeTrackFromPlaylist; }\n/* harmony export */ });\nconst API_URL = \"https://skypro-music-api.skyeng.tech/catalog/\";\nconst TRACK = \"track/\";\nconst ALL = \"all/\";\nconst FAVORITE = \"favorite/\";\nconst SELECTION = \"selection/\";\nconst API_URL_USER = \"https://skypro-music-api.skyeng.tech/user/\";\nconst LOGIN = \"login/\";\nconst SIGNUP = \"signup/\";\nconst TOKEN = \"token/\";\nconst TOKEN_REFRESH = \"token/refresh/\";\nasync function getTracks(playlistID) {\n    try {\n        const response = await fetch(API_URL + (playlistID ? SELECTION + playlistID : TRACK + ALL));\n        if (!response.ok) {\n            if (response.status === 401) {\n                throw new Error(\"No authorization\");\n            } else {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n        }\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.warn(error);\n        throw error;\n    }\n}\nasync function getLikedTracks(userData) {\n    return fetch(API_URL + TRACK + FAVORITE + ALL, {\n        method: \"POST\",\n        body: JSON.stringify({\n            userData\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Incorrect email or password.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Username not found.\");\n        }\n        if (response.status === 500) {\n            throw new Error(\"Internal server error.\");\n        }\n        return response.json();\n    });\n}\nasync function login(param) {\n    let { email, password } = param;\n    return fetch(API_URL_USER + LOGIN, {\n        method: \"POST\",\n        body: JSON.stringify({\n            email,\n            password\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Incorrect email or password.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Username not found.\");\n        }\n        if (response.status === 500) {\n            throw new Error(\"Internal server error.\");\n        }\n        return response.json();\n    });\n}\nasync function register(param) {\n    let { username, email, password } = param;\n    return fetch(API_URL_USER + SIGNUP, {\n        method: \"POST\",\n        body: JSON.stringify({\n            email,\n            password,\n            username\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Error during the registration process.\");\n        }\n        return response.json();\n    });\n}\nasync function getToken(param) {\n    let { email, password } = param;\n    return fetch(API_URL_USER + TOKEN, {\n        method: \"POST\",\n        body: JSON.stringify({\n            email,\n            password\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Incorrect email or password.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Username not found.\");\n        }\n        if (response.status === 500) {\n            throw new Error(\"Internal server error.\");\n        }\n        return response.json();\n    });\n}\nasync function refreshToken(refresh) {\n    return fetch(API_URL_USER + TOKEN, {\n        method: \"POST\",\n        body: JSON.stringify({\n            refresh: refresh\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"???\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Invalid or overdue token .\");\n        }\n        if (response.status === 500) {\n            throw new Error(\"Internal server error.\");\n        }\n        return response.json();\n    });\n}\nasync function addTrackToPlaylist(trackId) {\n    return fetch(API_URL + TRACK + \"\".concat(trackId, \"/\") + FAVORITE, {\n        method: \"POST\",\n        body: JSON.stringify({\n            trackId\n        }),\n        headers: {\n            Authorization: \"Bearer \".concat(localStorage.getItem(\"userToken\"))\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Error while adding the track.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Invalid or overdue token.\");\n        }\n        return response.json();\n    });\n}\nasync function removeTrackFromPlaylist(trackId) {\n    return fetch(API_URL + TRACK + \"\".concat(trackId, \"/\") + FAVORITE, {\n        method: \"DELETE\",\n        body: JSON.stringify({\n            id: trackId\n        }),\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: \"Bearer \".concat(localStorage.getItem(\"userToken\"))\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Error while removing the track.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Invalid or overdue token.\");\n        }\n        return response.json();\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLFVBQTRDLE9BQWxDQyxhQUFhQyxPQUFPLENBQUM7UUFDbEQ7SUFDSixHQUFHYixJQUFJLENBQUMsQ0FBQ2pCO1FBQ0wsSUFBSUEsU0FBU0csTUFBTSxLQUFLLEtBQUs7WUFDekIsTUFBTSxJQUFJQyxNQUFNO1FBQ3BCO1FBQ0EsSUFBSUosU0FBU0csTUFBTSxLQUFLLEtBQUs7WUFDekIsTUFBTSxJQUFJQyxNQUFNO1FBQ3BCO1FBQ0EsT0FBT0osU0FBU00sSUFBSTtJQUN4QjtBQUNKO0FBRU8sZUFBZXlCLHdCQUF3QkosT0FBZTtJQUN6RCxPQUFPMUIsTUFBTWIsVUFBVUMsUUFBUSxHQUFXLE9BQVJzQyxTQUFRLE9BQUtwQyxVQUFVO1FBQ3JEcUIsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDakJpQixJQUFJTDtRQUNSO1FBQ0FYLFNBQVM7WUFDTCxnQkFBZ0I7WUFDaEJZLGVBQWUsVUFBNEMsT0FBbENDLGFBQWFDLE9BQU8sQ0FBQztRQUNsRDtJQUNKLEdBQUdiLElBQUksQ0FBQyxDQUFDakI7UUFDTCxJQUFJQSxTQUFTRyxNQUFNLEtBQUssS0FBSztZQUN6QixNQUFNLElBQUlDLE1BQU07UUFDcEI7UUFDQSxJQUFJSixTQUFTRyxNQUFNLEtBQUssS0FBSztZQUN6QixNQUFNLElBQUlDLE1BQU07UUFDcEI7UUFDQSxPQUFPSixTQUFTTSxJQUFJO0lBQ3hCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS50c3g/YmRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfVVJMID0gXCJodHRwczovL3NreXByby1tdXNpYy1hcGkuc2t5ZW5nLnRlY2gvY2F0YWxvZy9cIjtcclxuY29uc3QgVFJBQ0sgPSBcInRyYWNrL1wiO1xyXG5jb25zdCBBTEwgPSBcImFsbC9cIjtcclxuY29uc3QgRkFWT1JJVEUgPSBcImZhdm9yaXRlL1wiO1xyXG5jb25zdCBTRUxFQ1RJT04gPSBcInNlbGVjdGlvbi9cIjtcclxuY29uc3QgQVBJX1VSTF9VU0VSID0gXCJodHRwczovL3NreXByby1tdXNpYy1hcGkuc2t5ZW5nLnRlY2gvdXNlci9cIjtcclxuY29uc3QgTE9HSU4gPSBcImxvZ2luL1wiO1xyXG5jb25zdCBTSUdOVVAgPSBcInNpZ251cC9cIjtcclxuY29uc3QgVE9LRU4gPSBcInRva2VuL1wiO1xyXG5jb25zdCBUT0tFTl9SRUZSRVNIID0gXCJ0b2tlbi9yZWZyZXNoL1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWNrcyhwbGF5bGlzdElEOiBudW1iZXIgfCBudWxsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX1VSTCArIChwbGF5bGlzdElEID8gKFNFTEVDVElPTiArIHBsYXlsaXN0SUQpIDogKFRSQUNLICsgQUxMKSkpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhdXRob3JpemF0aW9uXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH07XHJcbn07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGlrZWRUcmFja3MoKSB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX1VSTCArIFRSQUNLICsgRkFWT1JJVEUgKyBBTEwpO1xyXG4vLyAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuLy8gICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhdXRob3JpemF0aW9uXCIpO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuLy8gICAgICAgICByZXR1cm4gZGF0YTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuLy8gICAgICAgICB0aHJvdyBlcnJvcjtcclxuLy8gICAgIH07XHJcbi8vIH07XHJcblxyXG50eXBlIGxvZ2luUHJvcHMgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpa2VkVHJhY2tzKHVzZXJEYXRhOiBsb2dpblByb3BzKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIFRSQUNLICsgRkFWT1JJVEUgKyBBTEwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdXNlckRhdGEsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IGVtYWlsIG9yIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VybmFtZSBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludGVybmFsIHNlcnZlciBlcnJvci5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG50eXBlIGxvZ2luUHJvcHMgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgZW1haWwsIHBhc3N3b3JkIH06IGxvZ2luUHJvcHMpIHtcclxuICAgIHJldHVybiBmZXRjaChBUElfVVJMX1VTRVIgKyBMT0dJTiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IGVtYWlsIG9yIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VybmFtZSBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludGVybmFsIHNlcnZlciBlcnJvci5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG50eXBlIHJlZ2lzdGVyUHJvcHMgPSB7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nXHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9OiByZWdpc3RlclByb3BzKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goQVBJX1VSTF9VU0VSICsgU0lHTlVQLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgZHVyaW5nIHRoZSByZWdpc3RyYXRpb24gcHJvY2Vzcy5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG50eXBlIGdldFRva2VuUHJvcHMgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRva2VuKHsgZW1haWwsIHBhc3N3b3JkIH06IGdldFRva2VuUHJvcHMpIHtcclxuICAgIHJldHVybiBmZXRjaChBUElfVVJMX1VTRVIgKyBUT0tFTiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IGVtYWlsIG9yIHBhc3N3b3JkLlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VybmFtZSBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludGVybmFsIHNlcnZlciBlcnJvci5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFRva2VuKHJlZnJlc2g6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGZldGNoKEFQSV9VUkxfVVNFUiArIFRPS0VOLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHJlZnJlc2g6IHJlZnJlc2gsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiPz8/XCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3Igb3ZlcmR1ZSB0b2tlbiAuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludGVybmFsIHNlcnZlciBlcnJvci5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVHJhY2tUb1BsYXlsaXN0KHRyYWNrSWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBUUkFDSyArIGAke3RyYWNrSWR9L2AgKyBGQVZPUklURSwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0cmFja0lkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclRva2VuXCIpfWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHdoaWxlIGFkZGluZyB0aGUgdHJhY2suXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3Igb3ZlcmR1ZSB0b2tlbi5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlVHJhY2tGcm9tUGxheWxpc3QodHJhY2tJZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIFRSQUNLICsgYCR7dHJhY2tJZH0vYCArIEZBVk9SSVRFLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaWQ6IHRyYWNrSWQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclRva2VuXCIpfWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHdoaWxlIHJlbW92aW5nIHRoZSB0cmFjay5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvciBvdmVyZHVlIHRva2VuLlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJUUkFDSyIsIkFMTCIsIkZBVk9SSVRFIiwiU0VMRUNUSU9OIiwiQVBJX1VSTF9VU0VSIiwiTE9HSU4iLCJTSUdOVVAiLCJUT0tFTiIsIlRPS0VOX1JFRlJFU0giLCJnZXRUcmFja3MiLCJwbGF5bGlzdElEIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJnZXRMaWtlZFRyYWNrcyIsInVzZXJEYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlZ2lzdGVyIiwidXNlcm5hbWUiLCJnZXRUb2tlbiIsInJlZnJlc2hUb2tlbiIsInJlZnJlc2giLCJhZGRUcmFja1RvUGxheWxpc3QiLCJ0cmFja0lkIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVUcmFja0Zyb21QbGF5bGlzdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api.tsx\n"));

/***/ })

});