"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDesktop = exports.isTablet = exports.isMobile = void 0;

var isMobile = function isMobile() {
  if (window.innerWidth < 768) {
    return true;
  }

  return false;
};

exports.isMobile = isMobile;

var isTablet = function isTablet() {
  if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
    return true;
  }

  return false;
};

exports.isTablet = isTablet;

var isDesktop = function isDesktop() {
  if (window.innerWidth > 1025) {
    return true;
  }

  return false;
};

exports.isDesktop = isDesktop;