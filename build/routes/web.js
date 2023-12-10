"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _homeController = _interopRequireDefault(require("../controller/homeController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var initWebRoutes = function initWebRoutes(app) {
  router.get('/', _homeController["default"].getUser);
  router.get('/add', _homeController["default"].addPage);
  router.post('/add', _homeController["default"].addUser);
  router.get('/update/:id', _homeController["default"].updatePage);
  router.post('/update', _homeController["default"].updateUser);
  router.post('/delete/:id', _homeController["default"].deleteUser);
  router.get('*', _homeController["default"].notFound);
  return app.use("/", router);
};
var _default = exports["default"] = initWebRoutes;