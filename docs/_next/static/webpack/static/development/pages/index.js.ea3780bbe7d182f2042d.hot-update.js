webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shopping-cart.tsx":
/*!**************************************!*\
  !*** ./components/shopping-cart.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ShoppingBasket */ "./node_modules/@material-ui/icons/ShoppingBasket.js");
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _context_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/global */ "./context/global.ts");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");



var _this = undefined,
    _jsxFileName = "/Users/robin/yoello-test/components/shopping-cart.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 9
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    table: {
      width: "100%"
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  var classes = useStyles();

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_context_global__WEBPACK_IMPORTED_MODULE_9__["GlobalContext"]),
      state = _React$useContext.state;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.fab,
    badgeContent: state.cart.items.length,
    color: "error",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.modal,
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "Shopping Cart"), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Paper"],
    className: classes.table,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "Item"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, "Price"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "Actions"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, state.cart.items.map(function (item) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_17__["default"], {
      key: item.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 23
      }
    }, item.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 23
      }
    }, "\xA3", item.abv.toFixed(2)), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 23
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 25
      }
    }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 27
      }
    }))));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
    rowSpan: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
    colSpan: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, "Subtotal"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_14__["default"], {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, (state.cart.items.map(function (i) {
    return i.abv * 100;
  }).reduce(function (acc, cur) {
    return acc += parseInt(cur, 10);
  }, 0) / 100).toFixed(2)))))))), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: function onClick() {
      return setOpen(true);
    },
    hidden: !open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.ea3780bbe7d182f2042d.hot-update.js.map