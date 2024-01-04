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

var currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");
var chooseInput = 'start';
var date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

var renderCalendar = function renderCalendar(chooseInput) {
  var firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  lastDareofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  lastDayofMonth = new Date(currYear, currMonth, lastDareofMonth).getDay();
  lastDareofLastMonth = new Date(currYear, currMonth, 0).getDate();
  var liTag = "";

  for (var i = firstDayofMonth; i > 0; i--) {
    liTag += "<li class=\"inactive\">".concat(lastDareofLastMonth - i + 1, "</li>");
  }

  for (var _i = 1; _i <= lastDareofMonth; _i++) {
    // let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? chooseInput == "start" ? "active chosen_start":"active chosen_end" : "";
    liTag += "<li class=\"\">".concat(_i, "</li>");
  }

  for (var _i2 = lastDayofMonth; _i2 < 6; _i2++) {
    liTag += "<li class=\"inactive\">".concat(_i2 - lastDayofMonth + 1, "</li>");
  }

  currentDate.innerText = "".concat(months[currMonth], " ").concat(currYear);
  daysTag.innerHTML = liTag;
};

renderCalendar(chooseInput);
prevNextIcon.forEach(function (icon) {
  icon.addEventListener("click", function () {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }

    renderCalendar();
  });
});
var daysLi = document.querySelectorAll(".days li");
var btnDelete = document.querySelector('.btn__delete');
var btnSubmit = document.querySelector('.btn__submit');
var bookingInputs = document.querySelectorAll('.booking__input');
var bookingWrapper = document.querySelector('.wrapper');
var inputStart = document.getElementById('start');
var inputEnd = document.getElementById('end');
var chosenState = {
  start: {
    state: 0
  },
  end: {
    state: 0
  }
};
daysLi.forEach(function (li) {
  var currentId = document.activeElement.id;
  li.addEventListener('click', showDate);
});

function showDate(evt) {
  var target = evt.currentTarget;
  var curClass = chooseInput == "start" ? "chosen_start" : "chosen_end";

  if (chosenState[chooseInput].state == 1) {
    document.getElementsByClassName(curClass)[0].classList.remove("active", curClass);
    chosenState[chooseInput].state = 0;
  }

  daysLi.forEach(function (li) {
    //  li.classList.remove('active');
    document.getElementById(chooseInput).value = target.innerText + '.' + currMonth + '.' + currYear;
    chosenState[chooseInput].state = 1;
  });
  target.classList.add('active');
  target.classList.add(curClass);
  inputEnd.focus();
  chooseInput = 'end';
  btnDelete.addEventListener('click', function (e) {
    target.classList.remove('active');
    inputStart.value = "";
    inputEnd.value = "";
  });
}

setListener(inputEnd, 'click', function (e) {
  chooseInput = 'end';
  bookingWrapper.classList.add('wrapper--visible');
});
btnSubmit.addEventListener('click', function (e) {
  bookingWrapper.classList.remove('wrapper--visible');
});
var dateBtn = document.querySelector(".date__btn");
var dateBox = document.querySelector(".date-box");
setListener(dateBtn, "click", function () {
  dateBox.classList.toggle("date-box__active");
});