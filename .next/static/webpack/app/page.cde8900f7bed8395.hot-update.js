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

/***/ "(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx":
/*!************************************************************!*\
  !*** ./src/components/FilterBlockItem/FilterBlockItem.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterBlockItem.module.css */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.module.css\");\n/* harmony import */ var _FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst FilterBlockItem = (param)=>{\n    let { children, onClick, isOpened, list, applyFilter } = param;\n    _s();\n    const [selectedValue, setSelectedValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // close the pop-up window when clicking outside the button\n    const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            if (buttonRef.current && !buttonRef.current.contains(event.target)) {\n                applyFilter(selectedValue); // Apply filter when clicking outside\n            }\n        };\n        if (isOpened) {\n            document.addEventListener(\"mousedown\", handleClickOutside);\n        } else {\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        }\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, [\n        isOpened,\n        applyFilter,\n        selectedValue\n    ]);\n    // Handle click on filter item\n    // const handleItemClick = (value: string) => {\n    //     setSelectedValue(value); // Set selected value\n    //     applyFilter(value); // Apply filter\n    // };\n    const handleItemClick = (value)=>{\n        // onClick(value === selectedValue ? null : value); // Toggle selected value\n        setSelectedValue(value === selectedValue ? null : value); // Toggle selected value\n        applyFilter(value); // Apply filter\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            list.length > 0 && isOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().CountPopUp),\n                children: list.length\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                ref: buttonRef,\n                type: \"button\",\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterButton), {\n                    [(_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)]: isOpened\n                }),\n                onClick: onClick,\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            isOpened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterBy),\n                children: list.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: list.map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterByP), {\n                                [(_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)]: value === selectedValue\n                            }),\n                            onClick: ()=>handleItemClick(value),\n                            children: value\n                        }, index, false, {\n                            fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 33\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 25\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_FilterBlockItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterByP),\n                    children: \"No data...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\учеба\\\\погромирование\\\\musix\\\\src\\\\components\\\\FilterBlockItem\\\\FilterBlockItem.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FilterBlockItem, \"Y4m8DyR1N396xQTdzsT1dOpFEqE=\");\n_c = FilterBlockItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlockItem); // // import classNames from \"classnames\";\n // // import styles from \"./FilterBlockItem.module.css\";\n // // import { useEffect, useRef } from \"react\";\n // // type FilterItemProps = {\n // //     children: string;\n // //     onClick: () => void;\n // //     isOpened: boolean;\n // //     list: Array<string>;\n // // };\n // // export default function FilterBlockItem({\n // //     children,\n // //     onClick,\n // //     isOpened,\n // //     list,\n // // }: FilterItemProps) {\n // //     // close the pop-up window when clicking outside the button\n // //     const buttonRef = useRef<HTMLButtonElement>(null);\n // //     useEffect(() => {\n // //         const handleClickOutside = (event: MouseEvent) => {\n // //             if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {\n // //                 onClick();\n // //             }\n // //         };\n // //         if (isOpened) {\n // //             document.addEventListener(\"mousedown\", handleClickOutside);\n // //         } else {\n // //             document.removeEventListener(\"mousedown\", handleClickOutside);\n // //         }\n // //         return () => {\n // //             document.removeEventListener(\"mousedown\", handleClickOutside);\n // //         };\n // //     }, [isOpened, onClick]);\n // //     return (\n // //         <div>\n // //             {list.length > 0 && isOpened && (\n // //                 <div className={styles.CountPopUp}>\n // //                     {list.length}\n // //                 </div>\n // //             )}\n // //             <button\n // //                 ref={buttonRef}\n // //                 type=\"button\"\n // //                 className={classNames(styles.filterButton, {\n // //                     [styles.active]: isOpened,\n // //                 })}\n // //                 onClick={() => onClick()}\n // //             >\n // //                 {children}\n // //             </button>\n // //             {isOpened && (\n // //                 <div className={styles.filterBy}>\n // //                     {list.length > 0 ? (\n // //                         <ul>\n // //                             {list.map((e, index) => (\n // //                                 <li\n // //                                     key={index}\n // //                                     className={styles.filterByP}\n // //                                 >\n // //                                     {e}\n // //                                 </li>\n // //                             ))}\n // //                         </ul>\n // //                     ) : (\n // //                         <p className={styles.filterByP}>No data...</p>\n // //                     )}\n // //                 </div>\n // //             )}\n // //         </div>\n // //     );\n // // }\nvar _c;\n$RefreshReg$(_c, \"FilterBlockItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFDYztBQUNTO0FBVTNELE1BQU1NLGtCQUFrQjtRQUFDLEVBQ3JCQyxRQUFRLEVBQ1JDLE9BQU8sRUFDUEMsUUFBUSxFQUNSQyxJQUFJLEVBQ0pDLFdBQVcsRUFDRzs7SUFFZCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBZ0I7SUFFbEUsMkRBQTJEO0lBQzNELE1BQU1TLFlBQVlWLDZDQUFNQSxDQUFvQjtJQUM1Q0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNWSxxQkFBcUIsQ0FBQ0M7WUFDeEIsSUFBSUYsVUFBVUcsT0FBTyxJQUFJLENBQUNILFVBQVVHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixNQUFNRyxNQUFNLEdBQVc7Z0JBQ3hFUixZQUFZQyxnQkFBZ0IscUNBQXFDO1lBQ3JFO1FBQ0o7UUFDQSxJQUFJSCxVQUFVO1lBQ1ZXLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFOO1FBQzNDLE9BQU87WUFDSEssU0FBU0UsbUJBQW1CLENBQUMsYUFBYVA7UUFDOUM7UUFDQSxPQUFPO1lBQ0hLLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQO1FBQzlDO0lBQ0osR0FBRztRQUFDTjtRQUFVRTtRQUFhQztLQUFjO0lBRXpDLDhCQUE4QjtJQUM5QiwrQ0FBK0M7SUFDL0MscURBQXFEO0lBQ3JELDBDQUEwQztJQUMxQyxLQUFLO0lBQ0wsTUFBTVcsa0JBQWtCLENBQUNDO1FBQ3JCLDRFQUE0RTtRQUM1RVgsaUJBQWlCVyxVQUFVWixnQkFBZ0IsT0FBT1ksUUFBUSx3QkFBd0I7UUFDbEZiLFlBQVlhLFFBQVEsZUFBZTtJQUN2QztJQUVBLHFCQUNJLDhEQUFDQzs7WUFDSWYsS0FBS2dCLE1BQU0sR0FBRyxLQUFLakIsMEJBQ2hCLDhEQUFDZ0I7Z0JBQUlFLFdBQVcxQiwrRUFBaUI7MEJBQzVCUyxLQUFLZ0IsTUFBTTs7Ozs7OzBCQUdwQiw4REFBQ0c7Z0JBQ0dDLEtBQUtoQjtnQkFDTGlCLE1BQUs7Z0JBQ0xKLFdBQVczQixpREFBVUEsQ0FBQ0MsaUZBQW1CLEVBQUU7b0JBQ3ZDLENBQUNBLDJFQUFhLENBQUMsRUFBRVE7Z0JBQ3JCO2dCQUNBRCxTQUFTQTswQkFFUkQ7Ozs7OztZQUVKRSwwQkFDRyw4REFBQ2dCO2dCQUFJRSxXQUFXMUIsNkVBQWU7MEJBQzFCUyxLQUFLZ0IsTUFBTSxHQUFHLGtCQUNYLDhEQUFDUzs4QkFDSXpCLEtBQUswQixHQUFHLENBQUMsQ0FBQ1osT0FBT2Esc0JBQ2QsOERBQUNDOzRCQUVHWCxXQUFXM0IsaURBQVVBLENBQUNDLDhFQUFnQixFQUFFO2dDQUNwQyxDQUFDQSwyRUFBYSxDQUFDLEVBQUV1QixVQUFVWjs0QkFDL0I7NEJBQ0FKLFNBQVMsSUFBTWUsZ0JBQWdCQztzQ0FFOUJBOzJCQU5JYTs7Ozs7Ozs7OzhDQVdqQiw4REFBQ0c7b0JBQUViLFdBQVcxQiw4RUFBZ0I7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0dBL0VNSztLQUFBQTtBQWlGTiwrREFBZUEsZUFBZUEsRUFBQyxDQUUvQiwwQ0FBMEM7Q0FDMUMsd0RBQXdEO0NBQ3hELGdEQUFnRDtDQUVoRCw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLDhCQUE4QjtDQUM5Qiw0QkFBNEI7Q0FDNUIsOEJBQThCO0NBQzlCLFFBQVE7Q0FFUiwrQ0FBK0M7Q0FDL0MsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLDJCQUEyQjtDQUUzQixxRUFBcUU7Q0FDckUsNERBQTREO0NBQzVELDJCQUEyQjtDQUMzQixpRUFBaUU7Q0FDakUsK0ZBQStGO0NBQy9GLGdDQUFnQztDQUNoQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLDZCQUE2QjtDQUM3Qiw2RUFBNkU7Q0FDN0Usc0JBQXNCO0NBQ3RCLGdGQUFnRjtDQUNoRixlQUFlO0NBQ2YsNEJBQTRCO0NBQzVCLGdGQUFnRjtDQUNoRixnQkFBZ0I7Q0FDaEIsa0NBQWtDO0NBRWxDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsbURBQW1EO0NBQ25ELHlEQUF5RDtDQUN6RCx1Q0FBdUM7Q0FDdkMsNEJBQTRCO0NBQzVCLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIscUNBQXFDO0NBQ3JDLG1DQUFtQztDQUNuQyxrRUFBa0U7Q0FDbEUsb0RBQW9EO0NBQ3BELHlCQUF5QjtDQUN6QiwrQ0FBK0M7Q0FDL0MsbUJBQW1CO0NBQ25CLGdDQUFnQztDQUNoQywyQkFBMkI7Q0FDM0IsZ0NBQWdDO0NBQ2hDLHVEQUF1RDtDQUN2RCw4Q0FBOEM7Q0FDOUMsa0NBQWtDO0NBQ2xDLDJEQUEyRDtDQUMzRCx5Q0FBeUM7Q0FDekMscURBQXFEO0NBQ3JELHNFQUFzRTtDQUN0RSx1Q0FBdUM7Q0FDdkMsNkNBQTZDO0NBQzdDLDJDQUEyQztDQUMzQyxxQ0FBcUM7Q0FDckMsbUNBQW1DO0NBQ25DLCtCQUErQjtDQUMvQiw0RUFBNEU7Q0FDNUUsNEJBQTRCO0NBQzVCLDRCQUE0QjtDQUM1QixvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrSXRlbS9GaWx0ZXJCbG9ja0l0ZW0udHN4P2I0NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9ja0l0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIEZpbHRlckl0ZW1Qcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBzdHJpbmc7XHJcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkOyAvLyBVcGRhdGVkIG9uQ2xpY2sgcHJvcCB0byBhY2NlcHQgbm8gcGFyYW1ldGVyc1xyXG4gICAgaXNPcGVuZWQ6IGJvb2xlYW47XHJcbiAgICBsaXN0OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgYXBwbHlGaWx0ZXI6ICh2YWx1ZTogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZDsgLy8gUGFzcyBhcHBseUZpbHRlciBmdW5jdGlvblxyXG59O1xyXG5cclxuY29uc3QgRmlsdGVyQmxvY2tJdGVtID0gKHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgb25DbGljayxcclxuICAgIGlzT3BlbmVkLFxyXG4gICAgbGlzdCxcclxuICAgIGFwcGx5RmlsdGVyXHJcbn06IEZpbHRlckl0ZW1Qcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIC8vIGNsb3NlIHRoZSBwb3AtdXAgd2luZG93IHdoZW4gY2xpY2tpbmcgb3V0c2lkZSB0aGUgYnV0dG9uXHJcbiAgICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvblJlZi5jdXJyZW50ICYmICFidXR0b25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIGFwcGx5RmlsdGVyKHNlbGVjdGVkVmFsdWUpOyAvLyBBcHBseSBmaWx0ZXIgd2hlbiBjbGlja2luZyBvdXRzaWRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc09wZW5lZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtpc09wZW5lZCwgYXBwbHlGaWx0ZXIsIHNlbGVjdGVkVmFsdWVdKTtcclxuXHJcbiAgICAvLyBIYW5kbGUgY2xpY2sgb24gZmlsdGVyIGl0ZW1cclxuICAgIC8vIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0U2VsZWN0ZWRWYWx1ZSh2YWx1ZSk7IC8vIFNldCBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgLy8gICAgIGFwcGx5RmlsdGVyKHZhbHVlKTsgLy8gQXBwbHkgZmlsdGVyXHJcbiAgICAvLyB9O1xyXG4gICAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyBvbkNsaWNrKHZhbHVlID09PSBzZWxlY3RlZFZhbHVlID8gbnVsbCA6IHZhbHVlKTsgLy8gVG9nZ2xlIHNlbGVjdGVkIHZhbHVlXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRWYWx1ZSh2YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSA/IG51bGwgOiB2YWx1ZSk7IC8vIFRvZ2dsZSBzZWxlY3RlZCB2YWx1ZVxyXG4gICAgICAgIGFwcGx5RmlsdGVyKHZhbHVlKTsgLy8gQXBwbHkgZmlsdGVyXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xpc3QubGVuZ3RoID4gMCAmJiBpc09wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvdW50UG9wVXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICByZWY9e2J1dHRvblJlZn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5maWx0ZXJCdXR0b24sIHtcclxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IGlzT3BlbmVkLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfSAvLyBUb2dnbGUgaXNPcGVuZWQgb24gYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtpc09wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5fT5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmZpbHRlckJ5UCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlcy5hY3RpdmVdOiB2YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+Tm8gZGF0YS4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQmxvY2tJdGVtO1xyXG5cclxuLy8gLy8gaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJCbG9ja0l0ZW0ubW9kdWxlLmNzc1wiO1xyXG4vLyAvLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gLy8gdHlwZSBGaWx0ZXJJdGVtUHJvcHMgPSB7XHJcbi8vIC8vICAgICBjaGlsZHJlbjogc3RyaW5nO1xyXG4vLyAvLyAgICAgb25DbGljazogKCkgPT4gdm9pZDtcclxuLy8gLy8gICAgIGlzT3BlbmVkOiBib29sZWFuO1xyXG4vLyAvLyAgICAgbGlzdDogQXJyYXk8c3RyaW5nPjtcclxuLy8gLy8gfTtcclxuXHJcbi8vIC8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlckJsb2NrSXRlbSh7XHJcbi8vIC8vICAgICBjaGlsZHJlbixcclxuLy8gLy8gICAgIG9uQ2xpY2ssXHJcbi8vIC8vICAgICBpc09wZW5lZCxcclxuLy8gLy8gICAgIGxpc3QsXHJcbi8vIC8vIH06IEZpbHRlckl0ZW1Qcm9wcykge1xyXG5cclxuLy8gLy8gICAgIC8vIGNsb3NlIHRoZSBwb3AtdXAgd2luZG93IHdoZW4gY2xpY2tpbmcgb3V0c2lkZSB0aGUgYnV0dG9uXHJcbi8vIC8vICAgICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xyXG4vLyAvLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gLy8gICAgICAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuLy8gLy8gICAgICAgICAgICAgaWYgKGJ1dHRvblJlZi5jdXJyZW50ICYmICFidXR0b25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkpIHtcclxuLy8gLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2soKTtcclxuLy8gLy8gICAgICAgICAgICAgfVxyXG4vLyAvLyAgICAgICAgIH07XHJcbi8vIC8vICAgICAgICAgaWYgKGlzT3BlbmVkKSB7XHJcbi8vIC8vICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuLy8gLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAvLyAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbi8vIC8vICAgICAgICAgfVxyXG4vLyAvLyAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbi8vIC8vICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuLy8gLy8gICAgICAgICB9O1xyXG4vLyAvLyAgICAgfSwgW2lzT3BlbmVkLCBvbkNsaWNrXSk7XHJcblxyXG4vLyAvLyAgICAgcmV0dXJuIChcclxuLy8gLy8gICAgICAgICA8ZGl2PlxyXG4vLyAvLyAgICAgICAgICAgICB7bGlzdC5sZW5ndGggPiAwICYmIGlzT3BlbmVkICYmIChcclxuLy8gLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ291bnRQb3BVcH0+XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAge2xpc3QubGVuZ3RofVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vIC8vICAgICAgICAgICAgICl9XHJcbi8vIC8vICAgICAgICAgICAgIDxidXR0b25cclxuLy8gLy8gICAgICAgICAgICAgICAgIHJlZj17YnV0dG9uUmVmfVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbi8vIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmZpbHRlckJ1dHRvbiwge1xyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuYWN0aXZlXTogaXNPcGVuZWQsXHJcbi8vIC8vICAgICAgICAgICAgICAgICB9KX1cclxuLy8gLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX1cclxuLy8gLy8gICAgICAgICAgICAgPlxyXG4vLyAvLyAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4vLyAvLyAgICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gLy8gICAgICAgICAgICAge2lzT3BlbmVkICYmIChcclxuLy8gLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnl9PlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0Lm1hcCgoZSwgaW5kZXgpID0+IChcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyQnlQfVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V9XHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlckJ5UH0+Tm8gZGF0YS4uLjwvcD5cclxuLy8gLy8gICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vIC8vICAgICAgICAgICAgICl9XHJcbi8vIC8vICAgICAgICAgPC9kaXY+XHJcbi8vIC8vICAgICApO1xyXG4vLyAvLyB9XHJcbiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZpbHRlckJsb2NrSXRlbSIsImNoaWxkcmVuIiwib25DbGljayIsImlzT3BlbmVkIiwibGlzdCIsImFwcGx5RmlsdGVyIiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJidXR0b25SZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVJdGVtQ2xpY2siLCJ2YWx1ZSIsImRpdiIsImxlbmd0aCIsImNsYXNzTmFtZSIsIkNvdW50UG9wVXAiLCJidXR0b24iLCJyZWYiLCJ0eXBlIiwiZmlsdGVyQnV0dG9uIiwiYWN0aXZlIiwiZmlsdGVyQnkiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJmaWx0ZXJCeVAiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\n"));

/***/ })

});