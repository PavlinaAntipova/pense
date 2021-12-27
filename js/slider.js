import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    edgeSwipeThreshold: 20,
});

console.log(swiper);
