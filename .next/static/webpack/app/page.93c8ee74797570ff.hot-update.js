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

/***/ "(app-pages-browser)/./src/api.tsx":
/*!*********************!*\
  !*** ./src/api.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; },\n/* harmony export */   getTracks: function() { return /* binding */ getTracks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst API_URL = \"https://skypro-music-api.skyeng.tech/catalog/\";\nasync function getTracks() {\n    try {\n        const response = await fetch(API_URL + \"track/all/\");\n        if (!response.ok) {\n            if (response.status === 401) {\n                throw new Error(\"No authorization\");\n            } else {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n        }\n        const data = await response.json();\n        console.log(data);\n        return data;\n    } catch (error) {\n        console.warn(error);\n        throw error;\n    }\n}\n// async function getData() {\n//     const response = await fetch(API_URL + \"track/all/\");\n//     if (!response.ok) {\n//         throw new Error('Error while getting data');\n//     }\n//     return response.json();\n// }\nasync function HomePage() {\n    const data = await getTracks();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: \"content\"\n    }, void 0, false, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\api.tsx\",\n        lineNumber: 34,\n        columnNumber: 12\n    }, this);\n} //  DRAFT. add authorisation\n // export async function addTrack({ X }) {\n //     try {\n //         const response = await fetch(API_URL`${id}/favorite/`, {\n //             method: \"POST\",\n //             body: JSON.stringify({\n //                 X,\n //             }),\n //         });\n //         if (!response.ok) {\n //             if (response.status === 400) {\n //                 throw new Error(\"Something went wrong\");\n //             } else {\n //                 throw new Error(`HTTP error! Status: ${response.status}`);\n //             }\n //         }\n //         return response.json();\n //     } catch (error) {\n //         alert(\"No internet connection. Try again later.\");\n //         console.warn(error);\n //         throw error;\n //     }\n // }\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxNQUFNQSxVQUFVO0FBRVQsZUFBZUM7SUFDbEIsSUFBSTtRQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUgsVUFBVTtRQUN2QyxJQUFJLENBQUNFLFNBQVNFLEVBQUUsRUFBRTtZQUNkLElBQUlGLFNBQVNHLE1BQU0sS0FBSyxLQUFLO2dCQUN6QixNQUFNLElBQUlDLE1BQU07WUFDcEIsT0FBTztnQkFDSCxNQUFNLElBQUlBLE1BQU0sdUJBQXVDLE9BQWhCSixTQUFTRyxNQUFNO1lBQzFEO1FBQ0o7UUFDQSxNQUFNRSxPQUFPLE1BQU1MLFNBQVNNLElBQUk7UUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixPQUFPQTtJQUNYLEVBQUUsT0FBT0ksT0FBTztRQUNaRixRQUFRRyxJQUFJLENBQUNEO1FBQ2IsTUFBTUE7SUFDVjtBQUNKO0FBRUEsNkJBQTZCO0FBQzdCLDREQUE0RDtBQUM1RCwwQkFBMEI7QUFDMUIsdURBQXVEO0FBQ3ZELFFBQVE7QUFDUiw4QkFBOEI7QUFDOUIsSUFBSTtBQUVXLGVBQWVFO0lBQzFCLE1BQU1OLE9BQU8sTUFBTU47SUFDbkIscUJBQU8sOERBQUNhO2tCQUFLOzs7Ozs7QUFDakIsRUFHQSw0QkFBNEI7Q0FDNUIsMENBQTBDO0NBQzFDLFlBQVk7Q0FDWixtRUFBbUU7Q0FDbkUsOEJBQThCO0NBQzlCLHFDQUFxQztDQUNyQyxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCw4QkFBOEI7Q0FDOUIsNkNBQTZDO0NBQzdDLDJEQUEyRDtDQUMzRCx1QkFBdUI7Q0FDdkIsNkVBQTZFO0NBQzdFLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osa0NBQWtDO0NBQ2xDLHdCQUF3QjtDQUN4Qiw2REFBNkQ7Q0FDN0QsK0JBQStCO0NBQy9CLHVCQUF1QjtDQUN2QixRQUFRO0NBQ1IsSUFBSTtLQTVCMEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkudHN4P2JkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhY2sgfSBmcm9tIFwiQC9pbnRlcmZhY2VzL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vc2t5cHJvLW11c2ljLWFwaS5za3llbmcudGVjaC9jYXRhbG9nL1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWNrcygpOiBQcm9taXNlPFRyYWNrW10+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfVVJMICsgXCJ0cmFjay9hbGwvXCIpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhdXRob3JpemF0aW9uXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEgYXMgVHJhY2tbXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX1VSTCArIFwidHJhY2svYWxsL1wiKTtcclxuLy8gICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIHdoaWxlIGdldHRpbmcgZGF0YScpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VHJhY2tzKCk7XHJcbiAgICByZXR1cm4gPG1haW4+Y29udGVudDwvbWFpbj47XHJcbn1cclxuXHJcblxyXG4vLyAgRFJBRlQuIGFkZCBhdXRob3Jpc2F0aW9uXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRUcmFjayh7IFggfSkge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkxgJHtpZH0vZmF2b3JpdGUvYCwge1xyXG4vLyAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4vLyAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbi8vICAgICAgICAgICAgICAgICBYLFxyXG4vLyAgICAgICAgICAgICB9KSxcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgYWxlcnQoXCJObyBpbnRlcm5ldCBjb25uZWN0aW9uLiBUcnkgYWdhaW4gbGF0ZXIuXCIpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XHJcbi8vICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJnZXRUcmFja3MiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwid2FybiIsIkhvbWVQYWdlIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api.tsx\n"));

/***/ })

});