//dropdown menu catalog
let menuBtn = document.querySelector('.catalog');

let menu = document.querySelector('.burger_nav')
menuBtn.addEventListener('click',function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})

//dropdown menu shoping cart
let basket__hovering = document.querySelector('.basket__hovering');
let shopping__cart = document.querySelector('.shopping__cart');
let clc__cart_add = document.querySelector('.clc__cart_add');
shopping__cart.addEventListener('click',function(){
  shopping__cart.classList.toggle('active');
  basket__hovering.classList.toggle('active');
  clc__cart_add.classList.toggle('active');

})


//accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
