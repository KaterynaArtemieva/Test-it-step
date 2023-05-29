import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container');
var swiper = new Swiper('.mySwiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});

// відкривання і закривання мобільної менюшки
// (() => {
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
console.log(openMenuBtn);
const closeMenuBtn = document.querySelector('.js-close-menu');
const bodyScroll = document.querySelector('body');

openMenuBtn.addEventListener('click', onOpenClick);
function onOpenClick() {
  mobileMenu.classList.add('is-open');
  openMenuBtn.classList.add('is-open');
  closeMenuBtn.classList.add('is-open');
  bodyScroll.classList.add('no-scroll');
  closeMenuBtn.addEventListener('click', onCloseClick);
}
function onCloseClick (){
    mobileMenu.classList.remove('is-open');
  openMenuBtn.classList.remove('is-open');
  closeMenuBtn.classList.remove('is-open');
  bodyScroll.classList.remove('no-scroll');
  openMenuBtn.addEventListener('click', onOpenClick);

}
// const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

//     mobileMenu.classList.toggle('is-open');
//     openMenuBtn.classList.toggle('is-open');
//     closeMenuBtn.classList.toggle('is-open');
//     // navigation.classList.toggle('mobile');
//     // authPerson.classList.toggle('mobile');
//     // signUpUser.classList.toggle('mobile');

//     bodyScroll.classList.toggle('no-scroll');
// }
// })
