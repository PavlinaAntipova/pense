import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const optionForTablet = {
  slidesPerView: window.matchMedia("(min-width: 768px)").matches ? 3 : 1,
  spaceBetween: window.matchMedia("(min-width: 768px)").matches ? 30 : 10,
}

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,


  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
    slidesPerView: optionForTablet.slidesPerView,
    spaceBetween: optionForTablet.spaceBetween,
});


