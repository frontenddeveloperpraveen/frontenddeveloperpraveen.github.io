var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  initialSlide: 5,
  centeredSlides: true,
  loop: true,
  centeredSlidesBounds: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1070: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
