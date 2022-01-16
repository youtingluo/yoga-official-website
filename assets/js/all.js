"use strict";

$(function () {
  var swiperCourse = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
      loop: true,
      disableOnInteraction: false
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 1.4,
        spaceBetween: 30
      }
    }
  });
});
//# sourceMappingURL=all.js.map
