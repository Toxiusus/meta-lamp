"use strict";

var _throttle = require("./throttle");

var fixFullheight = function fixFullheight() {
  var vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
};

var fixHeight = (0, _throttle.throttle)(fixFullheight);
fixHeight();
window.addEventListener('resize', fixHeight);