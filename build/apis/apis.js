"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _apisController = _interopRequireDefault(require("../controller/apisController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var initApis = function initApis(app) {
  router.get('/', _apisController["default"].getUser);
  router.post('/login', _apisController["default"].getUserByEmailPassword);
  router.post('/add', _apisController["default"].addUser);
  router.get('/:id', _apisController["default"].getUserById);
  router.post('/update', _apisController["default"].updateUser);
  router.post('/delete/:id', _apisController["default"].deleteUser);
  return app.use("/api/v1/users/", router);
};
var _default = exports["default"] = initApis;