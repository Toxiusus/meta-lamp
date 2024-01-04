"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mobileCheck = void 0;

var _vars = _interopRequireDefault(require("../_vars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mobileCheck = function mobileCheck() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    _vars["default"].htmlEl.classList.add('page--android');

    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars["default"].htmlEl.classList.add('page--ios');

    return "iOS";
  }

  return "unknown";
};

exports.mobileCheck = mobileCheck;