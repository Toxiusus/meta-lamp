const setListener = (element, type, handler) => {
  if(!element) {
    return;
  }
  element.addEventListener(type, handler);
  return() => {
    element.removeEventListener(type, handler);
  };
}

const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");
let chooseInput = 'start';

let date = new Date (),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["Январь",
"Февраль",
"Март",
"Апрель",
"Май",
"Июнь",
"Июль",
"Август"
,"Сентябрь"
,"Октябрь"
,"Ноябрь"
,"Декабрь"];

const renderCalendar = (chooseInput) => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    lastDareofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    lastDayofMonth = new Date(currYear, currMonth, lastDareofMonth).getDay();
    lastDareofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDareofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDareofMonth; i++) {
        // let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? chooseInput == "start" ? "active chosen_start":"active chosen_end" : "";
        liTag += `<li class="">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar(chooseInput);

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth -1 :currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    })
});

const daysLi = document.querySelectorAll(".days li");
const btnDelete = document.querySelector('.btn__delete');
const btnSubmit = document.querySelector('.btn__submit');
const bookingInputs = document.querySelectorAll('.booking__input');
console.log(bookingInputs);
const bookingWrapper = document.querySelector('.wrapper');
const inputStart = document.getElementById('start');
const inputEnd = document.getElementById('end');

let chosenState = {start:{state:0},end:{state:0}};

daysLi.forEach(li => {
    const currentId = document.activeElement.id;

    li.addEventListener('click', showDate);
});

function showDate (evt) {
    const target = evt.currentTarget;

    var curClass = chooseInput == "start" ? "chosen_start" : "chosen_end";

    if(chosenState[chooseInput].state == 1) {
      document.getElementsByClassName(curClass)[0].classList.remove("active",curClass);
      chosenState[chooseInput].state = 0;
    }

    daysLi.forEach(function(li){

    //  li.classList.remove('active');

     document.getElementById(chooseInput).value = target.innerText + '.' + currMonth + '.' + currYear;
     chosenState[chooseInput].state = 1;
    });

    target.classList.add('active');

    target.classList.add(curClass);

    inputEnd.focus();

    chooseInput = 'end';

    btnDelete.addEventListener(('click'),(e) => {
        target.classList.remove('active');
        inputStart.value = "";
        inputEnd.value = "";
    });
}

setListener(inputEnd, 'click', e => {
    chooseInput = 'end';
    bookingWrapper.classList.add('wrapper--visible');
});

btnSubmit.addEventListener('click', e => {
    bookingWrapper.classList.remove('wrapper--visible');
});

const dateBtn = document.querySelector(".date__btn");
const dateBox = document.querySelector(".date-box");

setListener(dateBtn, "click", () => {
  dateBox.classList.toggle("date-box__active");
});


