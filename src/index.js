import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import throttle from 'lodash.throttle';
// Accordion
new Accordion('.accordion-container');
// Swiper
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
// mobileMenu
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
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
function onCloseClick() {
  mobileMenu.classList.remove('is-open');
  openMenuBtn.classList.remove('is-open');
  closeMenuBtn.classList.remove('is-open');
  bodyScroll.classList.remove('no-scroll');
  openMenuBtn.addEventListener('click', onOpenClick);
}
// Hero
const hero = document.querySelector('.hero');
const men = document.querySelector('.js-men');
const imgBaner1 = document.querySelector('.js-img-1');
const imgBaner2 = document.querySelector('.js-img-2');

const imgBaner3 = document.querySelector('.js-img-3');
const imgBaner4 = document.querySelector('.js-img-4');

hero.addEventListener('mousemove', throttle(onHeroMove, 60));
function onHeroMove(evt) {
  let xHero = evt.clientX;
  let yHero = evt.clientY;
  men.style.transform =
    'translate(' + xHero * 0.1 * -1 + 'px, ' + yHero * 0.1 * -1 + 'px)';
  imgBaner1.style.transform =
    'translate(' + xHero * 0.05 * -1 + 'px, ' + yHero * 0.05 * -1 + 'px)';
  imgBaner2.style.transform =
    'translate(' + xHero * 0.05 * -1 + 'px, ' + yHero * 0.05 * -1 + 'px)';
  imgBaner3.style.transform =
    'translate(' + xHero * 0.05 * -1 + 'px, ' + yHero * 0.05 * -1 + 'px)';
  imgBaner4.style.transform =
    'translate(' + xHero * 0.05 * -1 + 'px, ' + yHero * 0.05 * -1 + 'px)';
}
