const numbers = document.querySelectorAll(".pagination__link");

numbers.forEach(num => {
  num.addEventListener('click', choosePage => {

    document.querySelector('.pagination__link-active').classList.remove('pagination__link-active');
    num.classList.add('pagination__link-active');
  });
});
