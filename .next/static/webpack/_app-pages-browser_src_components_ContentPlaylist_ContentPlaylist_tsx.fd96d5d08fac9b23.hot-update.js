"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_ContentPlaylist_ContentPlaylist_tsx",{

/***/ "(app-pages-browser)/./src/api.tsx":
/*!*********************!*\
  !*** ./src/api.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTrackToPlaylist: function() { return /* binding */ addTrackToPlaylist; },\n/* harmony export */   getLikedTracks: function() { return /* binding */ getLikedTracks; },\n/* harmony export */   getToken: function() { return /* binding */ getToken; },\n/* harmony export */   getTracks: function() { return /* binding */ getTracks; },\n/* harmony export */   login: function() { return /* binding */ login; },\n/* harmony export */   refreshToken: function() { return /* binding */ refreshToken; },\n/* harmony export */   register: function() { return /* binding */ register; },\n/* harmony export */   removeTrackFromPlaylist: function() { return /* binding */ removeTrackFromPlaylist; }\n/* harmony export */ });\nconst API_URL = \"https://skypro-music-api.skyeng.tech/catalog/\";\nconst TRACK = \"track/\";\nconst ALL = \"all/\";\nconst FAVORITE = \"favorite/\";\nconst SELECTION = \"selection/\";\nconst API_URL_USER = \"https://skypro-music-api.skyeng.tech/user/\";\nconst LOGIN = \"login/\";\nconst SIGNUP = \"signup/\";\nconst TOKEN = \"token/\";\nconst TOKEN_REFRESH = \"token/refresh/\";\nasync function getTracks(playlistID) {\n    try {\n        const response = await fetch(API_URL + (playlistID ? SELECTION + playlistID : TRACK + ALL));\n        if (!response.ok) {\n            if (response.status === 401) {\n                throw new Error(\"No authorization\");\n            } else {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n        }\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.warn(error);\n        throw error;\n    }\n}\nasync function getLikedTracks(userData) {\n    return fetch(API_URL + TRACK + FAVORITE + ALL, {\n        method: \"POST\",\n        body: JSON.stringify({\n            email,\n            password\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Incorrect email or password.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Username not found.\");\n        }\n        if (response.status === 500) {\n            throw new Error(\"Internal server error.\");\n        }\n        return response.json();\n    });\n}\nasync function login(param) {\n    let { email: email1, password: password1 } = param;\n    return fetch(API_URL_USER + LOGIN, {\n        method: \"POST\",\n        body: JSON.stringify({\n            email: email1,\n            password: password1\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Incorrect email or password.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Username not found.\");\n        }\n        if (response.status === 500) {\n            throw new Error(\"Internal server error.\");\n        }\n        return response.json();\n    });\n}\nasync function register(param) {\n    let { username, email: email1, password: password1 } = param;\n    return fetch(API_URL_USER + SIGNUP, {\n        method: \"POST\",\n        body: JSON.stringify({\n            email: email1,\n            password: password1,\n            username\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Error during the registration process.\");\n        }\n        return response.json();\n    });\n}\nasync function getToken(param) {\n    let { email: email1, password: password1 } = param;\n    return fetch(API_URL_USER + TOKEN, {\n        method: \"POST\",\n        body: JSON.stringify({\n            email: email1,\n            password: password1\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Incorrect email or password.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Username not found.\");\n        }\n        if (response.status === 500) {\n            throw new Error(\"Internal server error.\");\n        }\n        return response.json();\n    });\n}\nasync function refreshToken(refresh) {\n    return fetch(API_URL_USER + TOKEN, {\n        method: \"POST\",\n        body: JSON.stringify({\n            refresh: refresh\n        }),\n        headers: {\n            \"content-type\": \"application/json\"\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"???\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Invalid or overdue token .\");\n        }\n        if (response.status === 500) {\n            throw new Error(\"Internal server error.\");\n        }\n        return response.json();\n    });\n}\nasync function addTrackToPlaylist(trackId) {\n    return fetch(API_URL + TRACK + \"\".concat(trackId, \"/\") + FAVORITE, {\n        method: \"POST\",\n        body: JSON.stringify({\n            trackId\n        }),\n        headers: {\n            Authorization: \"Bearer \".concat(localStorage.getItem(\"userToken\"))\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Error while adding the track.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Invalid or overdue token.\");\n        }\n        return response.json();\n    });\n}\nasync function removeTrackFromPlaylist(trackId) {\n    return fetch(API_URL + TRACK + \"\".concat(trackId, \"/\") + FAVORITE, {\n        method: \"DELETE\",\n        body: JSON.stringify({\n            id: trackId\n        }),\n        headers: {\n            \"content-type\": \"application/json\",\n            Authorization: \"Bearer \".concat(localStorage.getItem(\"userToken\"))\n        }\n    }).then((response)=>{\n        if (response.status === 400) {\n            throw new Error(\"Error while removing the track.\");\n        }\n        if (response.status === 401) {\n            throw new Error(\"Invalid or overdue token.\");\n        }\n        return response.json();\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFVO1FBQ3JEcUIsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDakJZO1FBQ0o7UUFDQVQsU0FBUztZQUNMVSxlQUFlLFVBQTRDLE9BQWxDQyxhQUFhQyxPQUFPLENBQUM7UUFDbEQ7SUFDSixHQUFHWCxJQUFJLENBQUMsQ0FBQ25CO1FBQ0wsSUFBSUEsU0FBU0csTUFBTSxLQUFLLEtBQUs7WUFDekIsTUFBTSxJQUFJQyxNQUFNO1FBQ3BCO1FBQ0EsSUFBSUosU0FBU0csTUFBTSxLQUFLLEtBQUs7WUFDekIsTUFBTSxJQUFJQyxNQUFNO1FBQ3BCO1FBQ0EsT0FBT0osU0FBU00sSUFBSTtJQUN4QjtBQUNKO0FBRU8sZUFBZXlCLHdCQUF3QkosT0FBZTtJQUN6RCxPQUFPMUIsTUFBTWIsVUFBVUMsUUFBUSxHQUFXLE9BQVJzQyxTQUFRLE9BQUtwQyxVQUFVO1FBQ3JEcUIsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDakJpQixJQUFJTDtRQUNSO1FBQ0FULFNBQVM7WUFDTCxnQkFBZ0I7WUFDaEJVLGVBQWUsVUFBNEMsT0FBbENDLGFBQWFDLE9BQU8sQ0FBQztRQUNsRDtJQUNKLEdBQUdYLElBQUksQ0FBQyxDQUFDbkI7UUFDTCxJQUFJQSxTQUFTRyxNQUFNLEtBQUssS0FBSztZQUN6QixNQUFNLElBQUlDLE1BQU07UUFDcEI7UUFDQSxJQUFJSixTQUFTRyxNQUFNLEtBQUssS0FBSztZQUN6QixNQUFNLElBQUlDLE1BQU07UUFDcEI7UUFDQSxPQUFPSixTQUFTTSxJQUFJO0lBQ3hCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS50c3g/YmRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfVVJMID0gXCJodHRwczovL3NreXByby1tdXNpYy1hcGkuc2t5ZW5nLnRlY2gvY2F0YWxvZy9cIjtcclxuY29uc3QgVFJBQ0sgPSBcInRyYWNrL1wiO1xyXG5jb25zdCBBTEwgPSBcImFsbC9cIjtcclxuY29uc3QgRkFWT1JJVEUgPSBcImZhdm9yaXRlL1wiO1xyXG5jb25zdCBTRUxFQ1RJT04gPSBcInNlbGVjdGlvbi9cIjtcclxuY29uc3QgQVBJX1VSTF9VU0VSID0gXCJodHRwczovL3NreXByby1tdXNpYy1hcGkuc2t5ZW5nLnRlY2gvdXNlci9cIjtcclxuY29uc3QgTE9HSU4gPSBcImxvZ2luL1wiO1xyXG5jb25zdCBTSUdOVVAgPSBcInNpZ251cC9cIjtcclxuY29uc3QgVE9LRU4gPSBcInRva2VuL1wiO1xyXG5jb25zdCBUT0tFTl9SRUZSRVNIID0gXCJ0b2tlbi9yZWZyZXNoL1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWNrcyhwbGF5bGlzdElEOiBudW1iZXIgfCBudWxsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX1VSTCArIChwbGF5bGlzdElEID8gKFNFTEVDVElPTiArIHBsYXlsaXN0SUQpIDogKFRSQUNLICsgQUxMKSkpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhdXRob3JpemF0aW9uXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH07XHJcbn07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGlrZWRUcmFja3MoKSB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX1VSTCArIFRSQUNLICsgRkFWT1JJVEUgKyBBTEwpO1xyXG4vLyAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuLy8gICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhdXRob3JpemF0aW9uXCIpO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4vLyAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgIH07XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuLy8gICAgICAgICByZXR1cm4gZGF0YTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuLy8gICAgICAgICB0aHJvdyBlcnJvcjtcclxuLy8gICAgIH07XHJcbi8vIH07XHJcblxyXG50eXBlIGxvZ2luUHJvcHMgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpa2VkVHJhY2tzKHVzZXJEYXRhOiBsb2dpblByb3BzKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goQVBJX1VSTCArIFRSQUNLICsgRkFWT1JJVEUgKyBBTEwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBlbWFpbCBvciBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlcm5hbWUgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxudHlwZSBsb2dpblByb3BzID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9OiBsb2dpblByb3BzKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goQVBJX1VSTF9VU0VSICsgTE9HSU4sIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBlbWFpbCBvciBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlcm5hbWUgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxudHlwZSByZWdpc3RlclByb3BzID0ge1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZ1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfTogcmVnaXN0ZXJQcm9wcykge1xyXG4gICAgcmV0dXJuIGZldGNoKEFQSV9VUkxfVVNFUiArIFNJR05VUCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGR1cmluZyB0aGUgcmVnaXN0cmF0aW9uIHByb2Nlc3MuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxudHlwZSBnZXRUb2tlblByb3BzID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb2tlbih7IGVtYWlsLCBwYXNzd29yZCB9OiBnZXRUb2tlblByb3BzKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goQVBJX1VSTF9VU0VSICsgVE9LRU4sIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluY29ycmVjdCBlbWFpbCBvciBwYXNzd29yZC5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlcm5hbWUgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hUb2tlbihyZWZyZXNoOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBmZXRjaChBUElfVVJMX1VTRVIgKyBUT0tFTiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICByZWZyZXNoOiByZWZyZXNoLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIj8/P1wiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9yIG92ZXJkdWUgdG9rZW4gLlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRyYWNrVG9QbGF5bGlzdCh0cmFja0lkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBmZXRjaChBUElfVVJMICsgVFJBQ0sgKyBgJHt0cmFja0lkfS9gICsgRkFWT1JJVEUsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdHJhY2tJZCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJUb2tlblwiKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciB3aGlsZSBhZGRpbmcgdGhlIHRyYWNrLlwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9yIG92ZXJkdWUgdG9rZW4uXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZVRyYWNrRnJvbVBsYXlsaXN0KHRyYWNrSWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGZldGNoKEFQSV9VUkwgKyBUUkFDSyArIGAke3RyYWNrSWR9L2AgKyBGQVZPUklURSwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGlkOiB0cmFja0lkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJUb2tlblwiKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciB3aGlsZSByZW1vdmluZyB0aGUgdHJhY2suXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3Igb3ZlcmR1ZSB0b2tlbi5cIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJBUElfVVJMIiwiVFJBQ0siLCJBTEwiLCJGQVZPUklURSIsIlNFTEVDVElPTiIsIkFQSV9VUkxfVVNFUiIsIkxPR0lOIiwiU0lHTlVQIiwiVE9LRU4iLCJUT0tFTl9SRUZSRVNIIiwiZ2V0VHJhY2tzIiwicGxheWxpc3RJRCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0TGlrZWRUcmFja3MiLCJ1c2VyRGF0YSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJwYXNzd29yZCIsImhlYWRlcnMiLCJ0aGVuIiwibG9naW4iLCJyZWdpc3RlciIsInVzZXJuYW1lIiwiZ2V0VG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoIiwiYWRkVHJhY2tUb1BsYXlsaXN0IiwidHJhY2tJZCIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlVHJhY2tGcm9tUGxheWxpc3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api.tsx\n"));

/***/ })

});