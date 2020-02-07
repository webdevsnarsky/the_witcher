window.onload = function () {
  var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,  
    direction: 'horizontal',
    loop: true, 
    navigation: {
      nextEl: '.arrow',
    },
    slidesPerView: 1,

    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  })
};


var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');


});