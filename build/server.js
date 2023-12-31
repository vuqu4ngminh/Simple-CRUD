"use strict";

var _express = _interopRequireDefault(require("express"));
var _apis = _interopRequireDefault(require("./apis/apis"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require("dotenv").config();
var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
_mongoose["default"].connect(process.env.MONGODB_URL).then(function () {
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  (0, _apis["default"])(app);
  var PORT = process.env.PORT || 6060;
  app.listen(PORT, function () {
    console.log("Server is running on " + PORT);
  });
})["catch"](function (error) {
  console.log(error);
});