"use strict";

var setListener = function setListener(element, type, handler) {
  if (!element) {
    return;
  }

  element.addEventListener(type, handler);
  return function () {
    element.removeEventListener(type, handler);
  };
};

var minusAdults = document.getElementById("minusAdults");
var minusChildren = document.getElementById("minusChildren");
var minusInfants = document.getElementById("minusInfants");
var plusAdults = document.getElementById("plusAdults");
var plusChildren = document.getElementById("plusChildren");
var plusInfants = document.getElementById("plusInfants");
var numAdults = document.getElementById("numAdults");
var numChildren = document.getElementById("numChildren");
var numInfants = document.getElementById("numInfants");
var guestsDelete = document.getElementById("guestsDelete");
var guestsSubmit = document.getElementById("guestsSubmit");
var howManyGuests = document.getElementById("howManyGuests");
var a = 0;
var b = 0;
var c = 0;
plusAdults.addEventListener('click', function () {
  a++;
  numAdults.innerText = a;
  howManyGuests.value = a + " гостя";
});
plusChildren.addEventListener('click', function () {
  b++;
  numChildren.innerText = b;
  howManyGuests.value = b + " гостя";
});
plusInfants.addEventListener('click', function () {
  c++;
  numInfants.innerText = c;
  howManyGuests.value = c + " гостя";
});
minusAdults.addEventListener('click', function () {
  if (a > 0) {
    a--;
    numAdults.innerText = a;
    howManyGuests.value = a + " гостя";
  }
});
minusChildren.addEventListener('click', function () {
  if (b > 0) {
    b--;
    numChildren.innerText = b;
    howManyGuests.value = b + " гостя";
  }
});
minusInfants.addEventListener('click', function () {
  if (c > 0) {
    c--;
    numInfants.innerText = c;
    howManyGuests.value = c + " гостя";
  }
});
guestsDelete.addEventListener('click', function (deleteGuests) {
  numAdults.innerText = 0;
  numChildren.innerText = 0;
  numInfants.innerText = 0;
  howManyGuests.value = "Сколько гостей";
}); // const selectBtn = document.querySelector(".select-menu__btn");
// const guestsRooms = document.querySelector(".guests-rooms");
// setListener(selectBtn, 'click', () => {
//   guestsRooms.classList.toggle("guests-rooms__active");
// });

var selectBtn = document.querySelectorAll(".select-menu__btn");
var guestsRooms = document.querySelectorAll(".guests-rooms");
selectBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    guestsRooms.classList.toggle("guests-rooms__active");
  });
});