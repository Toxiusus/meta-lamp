"use strict";

var numbers = document.querySelectorAll(".pagination__link");
numbers.forEach(function (num) {
  num.addEventListener('click', function (choosePage) {
    document.querySelector('.pagination__link-active').classList.remove('pagination__link-active');
    num.classList.add('pagination__link-active');
  });
});