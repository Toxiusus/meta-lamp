"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = void 0;

var throttle = function throttle(func) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var isThrottled = false;
  var savedArgs = null;
  var savedThis = null;
  return function wrap() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isThrottled) {
      savedArgs = args, savedThis = this;
      return;
    }

    func.apply(this, args);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;

      if (savedThis) {
        wrap.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  };
};

exports.throttle = throttle;