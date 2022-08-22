"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 10
    }
  } // autoplay: {
  //   disableOnInteraction: false,
  //   delay: 0
  // },
  // speed: 1500,
  // loop: true,

});
var superpowerswiper = new Swiper(".superpowerSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true
});
//# sourceMappingURL=all.js.map
