"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  }
});
var User = _mongoose["default"].model("User", userSchema);
module.exports = {
  User: User
};