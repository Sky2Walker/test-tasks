let menuBtn = document.querySelector('.catalog');

let menu = document.querySelector('.burger_nav')
menuBtn.addEventListener('click',function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})
