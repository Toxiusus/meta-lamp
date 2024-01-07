let guestsPlus = document.querySelectorAll(".guests__plus");
let guestsMinus = document.querySelectorAll(".guests__minus");

for (let i = 0; i < guestsPlus.length; i++) {
  let button = guestsPlus[i];

  button.addEventListener("click",function(event) {

    let buttonClicked = event.target;

    let input = buttonClicked.parentElement.children[1];

    let inputValue = input.innerHTML;

    let newValue = parseInt(inputValue) + 1;

    input.innerHTML = newValue;

    getTotal();
  })
}

for (let i = 0; i < guestsMinus.length; i++) {
  let button = guestsMinus[i];
  button.addEventListener("click",function(event) {

    let buttonClicked = event.target;

    let input = buttonClicked.parentElement.children[1];

    let inputValue = input.innerHTML;

    let newValue = parseInt(inputValue) - 1;

    input.innerHTML = newValue;

    if(newValue >= 0) {
      input.innerHTML = newValue;
    }else {
      input.innerHTML = 0;
    }
    getTotal();
  })
}

function getTotal() {
  let arr = document.querySelectorAll(".guests__num");
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if(parseInt(arr[i].innerHTML)) {
      total += parseInt(arr[i].innerHTML);
    }
  }

  document.getElementById("howManyGuests").value = total;

  if(document.getElementById("howManyGuests").value = total <= 0){
    document.getElementById("howManyGuests").value = total + "";
  }else if(document.getElementById("howManyGuests").value = total === 1) {
   document.getElementById("howManyGuests").value = total + " гость";
  }else if (document.getElementById("howManyGuests").value = total <= 4) {
  document.getElementById("howManyGuests").value = total + " гостя";
  }else {
  document.getElementById("howManyGuests").value = total + " гостей";
  }
}

let guestsDelete = document.getElementById("guestsDelete");

guestsDelete.addEventListener("click",function deleteGuests() {

  document.getElementById("howManyGuests").value = 0;

  let arr = document.querySelectorAll(".guests__num");

  for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = 0;
  }
})

