"use strict";

var rangeInput = document.querySelectorAll(".range-inputs__num");
var priceInput = document.querySelectorAll(".range-slider__input");
var progress = document.querySelector(".slider__progres");
var priceGap = 1000;
priceInput.forEach(function (input) {
  input.addEventListener("input", function (e) {
    var minVal = parseInt(priceInput[0].value);
    var maxVal = parseInt(priceInput[1].value);

    if (maxVal - minVal >= priceGap && maxVal <= 10000) {
      if (e.target.classList === "input-min") {
        rangeInput[0].value = minVal;
        progress.style.left = minVal / rangeInput[0].max * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - maxVal / rangeInput[1].max * 100 + "%";
      }
    }
  });
});
rangeInput.forEach(function (input) {
  input.addEventListener("input", function (e) {
    var minVal = parseInt(rangeInput[0].value);
    var maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.classList === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = minVal / rangeInput[0].max * 100 + "%";
      progress.style.right = 100 - maxVal / rangeInput[1].max * 100 + "%";
    }
  });
});